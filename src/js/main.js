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

const wait = new Promise((resolve) => resolve());

const detailEvent = function (event) {
  window._pcreatorConfig.event = event;
  wait.then(() => printCreator());
  return event;
};

kintone.events.on(
  ['app.record.detail.show', 'app.record.index.show'],
  detailEvent
);
