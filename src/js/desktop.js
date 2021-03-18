const PLUGIN_ID = kintone.$PLUGIN_ID;

const savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);
const pconfig = JSON.parse(savedConfig.pconfig);

window._pcreatorConfig = {
  appCode: pconfig.appCode,
  baseUrl: '//print.kintoneapp.com',
  sheets: pconfig.sheets,
  useAutoSave: true, // 添付ファイルフィールドへの自動保存
};

(function () {
  'use strict';
  const detailEvent = function (event) {
    let l, s, scr, styl;
    _pcreatorConfig.event = event;
    styl = document.createElement('link');
    styl.rel = 'stylesheet';
    styl.type = 'text/css';
    styl.href =
      '/g/cabinet/download.csp/-/kintone-lib.min.css?fid=3&ticket=&time=1615880745&hid=1&.css';
    l = document.getElementsByTagName('link')[0];
    l.parentNode.insertBefore(styl, l);
    scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src =
      '/g/cabinet/download.csp/-/kintone-lib.min.js?fid=2&ticket=&time=1615880577&hid=1&.js';
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
    styl.href =
      '/g/cabinet/download.csp/-/kintone-lib.min.css?fid=3&ticket=&time=1615880745&hid=1&.css';
    l = document.getElementsByTagName('link')[0];
    l.parentNode.insertBefore(styl, l);
    scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.async = true;
    scr.src =
      '/g/cabinet/download.csp/-/kintone-lib.min.js?fid=2&ticket=&time=1615880577&hid=1&.js';
    s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(scr, s);

    return event;
  };

  kintone.events.on('app.record.detail.show', detailEvent);
  kintone.events.on('app.record.index.show', indexEvent);
  //   kintone.events.on('mobile.app.record.detail.show', detailEvent);
  //   kintone.events.on('mobile.app.record.index.show', indexEvent);
})();
