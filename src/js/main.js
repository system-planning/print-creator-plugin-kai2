import { printCreator } from './lib/print-creator';

const PLUGIN_ID = kintone.$PLUGIN_ID;

const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
const pconfig = JSON.parse(savedConfig.pconfig);

let useAutoSave = true;
let indexShow = true;
if (Object.prototype.hasOwnProperty.call(pconfig, 'useAutoSave')) {
  useAutoSave = pconfig.useAutoSave;
}

if (Object.prototype.hasOwnProperty.call(pconfig, 'indexShow')) {
  indexShow = pconfig.indexShow;
}

window._pcreatorConfig = {
  baseUrl: '//print.kintoneapp.com',
  token: pconfig.apiToken,
  useAutoSave: useAutoSave, // 添付ファイルフィールドへの自動保存
};

const wait = new Promise((resolve) => resolve());

const showEvent = function (event) {
  window._pcreatorConfig.event = event;
  wait.then(() => printCreator());
};

const removeAutoSaveMenu = function (className) {
  const observer = new MutationObserver(function () {
    const removeEl = document.getElementsByClassName(
      'kintoneplugin-select-outer'
    );
    // if (removeEl.length === 2) removeEl[1].remove();
    if (removeEl.length) {
      removeEl[1].remove();
      observer.disconnect();
    }
  });
  const header = document.getElementsByClassName(className);
  if (header.length) {
    observer.observe(header[0], {
      childList: true,
      subtree: true,
    });
  }
};

kintone.events.on(['app.record.detail.show'], (event) => {
  showEvent(event);
  if (!useAutoSave) removeAutoSaveMenu('kintone-app-record-headermenu-space');
  return event;
});

if (indexShow) {
  kintone.events.on(['app.record.index.show'], (event) => {
    showEvent(event);
    if (!useAutoSave) removeAutoSaveMenu('kintone-app-headermenu-space');
    return event;
  });
}
