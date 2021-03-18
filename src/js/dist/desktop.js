/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/desktop.js":
/*!***************************!*\
  !*** ./src/js/desktop.js ***!
  \***************************/
/***/ (() => {

eval("var PLUGIN_ID = kintone.$PLUGIN_ID;\nvar savedConfig = kintone.plugin.app.getConfig(PLUGIN_ID);\nvar pconfig = JSON.parse(savedConfig.pconfig);\nconsole.log(pconfig);\nvar _pcreatorConfig = {\n  appCode: pconfig.appCode,\n  baseUrl: '//print.kintoneapp.com',\n  sheets: pconfig.sheets,\n  useAutoSave: true // 添付ファイルフィールドへの自動保存\n\n};\nconsole.log(_pcreatorConfig);\n\n(function () {\n  'use strict';\n\n  var detailEvent = function detailEvent(event) {\n    var l, s, scr, styl;\n    _pcreatorConfig.event = event;\n    styl = document.createElement('link');\n    styl.rel = 'stylesheet';\n    styl.type = 'text/css';\n    styl.href = '/g/cabinet/download.csp/-/kintone-lib.min.css?fid=3&ticket=&time=1615880745&hid=1&.css';\n    l = document.getElementsByTagName('link')[0];\n    l.parentNode.insertBefore(styl, l);\n    scr = document.createElement('script');\n    scr.type = 'text/javascript';\n    scr.async = true;\n    scr.src = '/g/cabinet/download.csp/-/kintone-lib.min.js?fid=2&ticket=&time=1615880577&hid=1&.js';\n    s = document.getElementsByTagName('script')[0];\n    s.parentNode.insertBefore(scr, s);\n    return event;\n  };\n\n  var indexEvent = function indexEvent(event) {\n    var l, s, scr, styl;\n    _pcreatorConfig.event = event;\n    styl = document.createElement('link');\n    styl.rel = 'stylesheet';\n    styl.type = 'text/css';\n    styl.href = '/g/cabinet/download.csp/-/kintone-lib.min.css?fid=3&ticket=&time=1615880745&hid=1&.css';\n    l = document.getElementsByTagName('link')[0];\n    l.parentNode.insertBefore(styl, l);\n    scr = document.createElement('script');\n    scr.type = 'text/javascript';\n    scr.async = true;\n    scr.src = '/g/cabinet/download.csp/-/kintone-lib.min.js?fid=2&ticket=&time=1615880577&hid=1&.js';\n    s = document.getElementsByTagName('script')[0];\n    s.parentNode.insertBefore(scr, s);\n    return event;\n  };\n\n  kintone.events.on('app.record.detail.show', detailEvent); //   kintone.events.on('mobile.app.record.detail.show', detailEvent);\n  //   kintone.events.on('app.record.index.show', indexEvent);\n  //   kintone.events.on('mobile.app.record.index.show', indexEvent);\n})();\n\n//# sourceURL=webpack://print-creator-plugin-kai/./src/js/desktop.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/desktop.js"]();
/******/ 	
/******/ })()
;