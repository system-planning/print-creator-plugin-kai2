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
  if (!useAutoSave) {
    const removeAutoSave = function () {
      const removeEl =
        document.querySelector(
          '#pc-auto-save-app > div > div:nth-child(2) > section'
        ) ||
        document.querySelector('#pc-auto-save-app > div > div:nth-child(2)');
      if (removeEl) removeEl.remove();
    };
    const observer = new MutationObserver(removeAutoSave);
    const header =
      document.querySelector(
        'body > div.container-gaia.app-index-container-gaia.no-navimenu-gaia.no-actionmenu-gaia > div.contents-actionmenu-gaia > div:nth-child(2) > div.gaia-argoui-app-index-toolbar > div > div.kintone-app-headermenu-space'
      ) ||
      document.querySelector(
        'body > div.container-gaia.no-navimenu-gaia.no-actionmenu-gaia > div:nth-child(2) > div.gaia-argoui-app-show-menu > div.kintone-app-record-headermenu-space'
      );
    if (header) {
      console.log('found header');
      observer.observe(header, {
        childList: true,
        subtree: true,
      });
    }
  }
  return event;
};

kintone.events.on(['app.record.detail.show'], showEvent);

if (indexShow) {
  kintone.events.on(['app.record.index.show'], showEvent);
}
