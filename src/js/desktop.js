import { printCreator } from './lib/print-creator';

const PLUGIN_ID = kintone.$PLUGIN_ID;

const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
const pconfig = JSON.parse(savedConfig.pconfig);

window._pcreatorConfig = {
  appCode: pconfig.appCode,
  baseUrl: '//print.kintoneapp.com',
  sheets: pconfig.sheets,
  useAutoSave: true, // 添付ファイルフィールドへの自動保存
};

const promise = new Promise(resolve => resolve())

const detailEvent = function (event) {
  window._pcreatorConfig.event = event;
  promise.then(() => printCreator())
  return event;
};

const indexEvent = function (event) {
  window._pcreatorConfig.event = event;
  promise.then(() => printCreator())
  return event;
};

kintone.events.on('app.record.detail.show', detailEvent);
kintone.events.on('app.record.index.show', indexEvent);
//   kintone.events.on('mobile.app.record.detail.show', detailEvent);
//   kintone.events.on('mobile.app.record.index.show', indexEvent);
