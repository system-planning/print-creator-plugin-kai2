const PLUGIN_ID = kintone.$PLUGIN_ID;

const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
const pconfig = JSON.parse(savedConfig.pconfig);

window._pcreatorConfig = {
  appCode: pconfig.appCode,
  baseUrl: '//print.kintoneapp.com',
  sheets: pconfig.sheets,
  useAutoSave: true, // 添付ファイルフィールドへの自動保存
};

const jsSrc =
  '/g/cabinet/download.csp/-/kintone-lib.min.js?fid=218697&ticket=&time=1615880075&hid=22254&.js';
const cssSrc =
  '/g/cabinet/download.csp/-/kintone-lib.min.css?fid=218729&ticket=&time=1616061265&hid=22254&.css';

(function () {
  'use strict';
  const detailEvent = function (event) {
    let l, s, scr, styl;
    _pcreatorConfig.event = event;
    styl = document.createElement('link');
    styl.rel = 'stylesheet';
    styl.type = 'text/css';
    styl.href = cssSrc;
    l = document.getElementsByTagName('link')[0];
    l.parentNode.insertBefore(styl, l);
    scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = jsSrc;
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scr, s);
    return event;
  };
  const indexEvent = function (event) {
    let l, s, scr, styl;
    _pcreatorConfig.event = event;
    styl = document.createElement('link');
    styl.rel = 'stylesheet';
    styl.type = 'text/css';
    styl.href = cssSrc;
    l = document.getElementsByTagName('link')[0];
    l.parentNode.insertBefore(styl, l);
    scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src = jsSrc;
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scr, s);

    return event;
  };

  kintone.events.on('app.record.detail.show', detailEvent);
  kintone.events.on('app.record.index.show', indexEvent);
  //   kintone.events.on('mobile.app.record.detail.show', detailEvent);
  //   kintone.events.on('mobile.app.record.index.show', indexEvent);
})();
