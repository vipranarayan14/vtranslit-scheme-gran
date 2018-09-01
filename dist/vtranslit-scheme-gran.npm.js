(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vTranslitSchemeGran"] = factory();
	else
		root["vTranslitSchemeGran"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var vTranslitSchemeGran = exports.vTranslitSchemeGran = {
  'about': {
    'code': 'Gran',
    'name': 'Grantha',
    'type': 'brahmic',
    'unicodeBlock': '11300—1137F'
  },
  'data': {
    'ayogavaha': ['\u11302', '\u11303'],
    'consonants': ['\u11315', '\u11316', '\u11317', '\u11318', '\u11319', '\u1131A', '\u1131B', '\u1131C', '\u1131D', '\u1131E', '\u1131F', '\u11320', '\u11321', '\u11322', '\u11323', '\u11324', '\u11325', '\u11326', '\u11327', '\u11328', '\u0BA9', '\u1132A', '\u1132B', '\u1132C', '\u1132D', '\u1132E', '\u1132F', '\u11330', '\u0BB1', '\u11332', '\u11333', '\u0BB4', '\u11335', '\u11336', '\u11337', '\u11338', '\u11339'],
    'deadConsonants': ['\u11315\u1134D', '\u11316\u1134D', '\u11317\u1134D', '\u11318\u1134D', '\u11319\u1134D', '\u1131A\u1134D', '\u1131B\u1134D', '\u1131C\u1134D', '\u1131D\u1134D', '\u1131E\u1134D', '\u1131F\u1134D', '\u11320\u1134D', '\u11321\u1134D', '\u11322\u1134D', '\u11323\u1134D', '\u11324\u1134D', '\u11325\u1134D', '\u11326\u1134D', '\u11327\u1134D', '\u11328\u1134D', '\u0BA9\u1134D', '\u1132A\u1134D', '\u1132B\u1134D', '\u1132C\u1134D', '\u1132D\u1134D', '\u1132E\u1134D', '\u1132F\u1134D', '\u11330\u1134D', '\u0BB1\u1134D', '\u11332\u1134D', '\u11333\u1134D', '\u0BB4\u1134D', '\u11335\u1134D', '\u11336\u1134D', '\u11337\u1134D', '\u11338\u1134D', '\u11339\u1134D'],
    'symbols': ['\u0BE6', '\u0BE7', '\u0BE8', '\u0BE9', '\u0BEA', '\u0BEB', '\u0BEC', '\u0BED', '\u0BEE', '\u0BEF', '\u0964', '\u0965', '\u011313\u011302', '', ''],
    'vowelMarks': ['', '\u1133E', '\u1133F', '\u11340', '\u11341', '\u11342', '\u11343', '\u11344', '\u11362', '\u11363', '\u11347', '\u11348', '\u1134B', '\u1134C'],
    'vowels': ['\u11305', '\u11306', '\u11307', '\u11308', '\u11309', '\u1130A', '\u1130B', '\u11360', '\u1130C', '\u11361', '\u1130F', '\u11310', '\u11313', '\u11314']
  }
};

/***/ })
/******/ ]);
});