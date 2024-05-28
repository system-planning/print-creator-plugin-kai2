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
  return event;
};

kintone.events.on(['app.record.detail.show'], showEvent);

if (indexShow) {
  kintone.events.on(['app.record.index.show'], showEvent);
}
