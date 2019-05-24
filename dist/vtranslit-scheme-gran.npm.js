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
  about: {
    code: 'Gran',
    name: 'Grantha',
    type: 'brahmic',
    unicodeBlock: '11300—1137F'
  },
  data: {
    ayogavaha: ['\uD804\uDF02', '\uD804\uDF03'],
    consonants: ['\uD804\uDF15', '\uD804\uDF16', '\uD804\uDF17', '\uD804\uDF18', '\uD804\uDF19', '\uD804\uDF1A', '\uD804\uDF1B', '\uD804\uDF1C', '\uD804\uDF1D', '\uD804\uDF1E', '\uD804\uDF1F', '\uD804\uDF20', '\uD804\uDF21', '\uD804\uDF22', '\uD804\uDF23', '\uD804\uDF24', '\uD804\uDF25', '\uD804\uDF26', '\uD804\uDF27', '\uD804\uDF28', '\u0BA9', '\uD804\uDF2A', '\uD804\uDF2B', '\uD804\uDF2C', '\uD804\uDF2D', '\uD804\uDF2E', '\uD804\uDF2F', '\uD804\uDF30', '\u0BB1', '\uD804\uDF32', '\uD804\uDF33', '\u0BB4', '\uD804\uDF35', '\uD804\uDF36', '\uD804\uDF37', '\uD804\uDF38', '\uD804\uDF39'],
    deadConsonants: ['\uD804\uDF15\uD804\uDF4D', '\uD804\uDF16\uD804\uDF4D', '\uD804\uDF17\uD804\uDF4D', '\uD804\uDF18\uD804\uDF4D', '\uD804\uDF19\uD804\uDF4D', '\uD804\uDF1A\uD804\uDF4D', '\uD804\uDF1B\uD804\uDF4D', '\uD804\uDF1C\uD804\uDF4D', '\uD804\uDF1D\uD804\uDF4D', '\uD804\uDF1E\uD804\uDF4D', '\uD804\uDF1F\uD804\uDF4D', '\uD804\uDF20\uD804\uDF4D', '\uD804\uDF21\uD804\uDF4D', '\uD804\uDF22\uD804\uDF4D', '\uD804\uDF23\uD804\uDF4D', '\uD804\uDF24\uD804\uDF4D', '\uD804\uDF25\uD804\uDF4D', '\uD804\uDF26\uD804\uDF4D', '\uD804\uDF27\uD804\uDF4D', '\uD804\uDF28\uD804\uDF4D', '\u0BA9\uD804\uDF4D', '\uD804\uDF2A\uD804\uDF4D', '\uD804\uDF2B\uD804\uDF4D', '\uD804\uDF2C\uD804\uDF4D', '\uD804\uDF2D\uD804\uDF4D', '\uD804\uDF2E\uD804\uDF4D', '\uD804\uDF2F\uD804\uDF4D', '\uD804\uDF30\uD804\uDF4D', '\u0BB1\uD804\uDF4D', '\uD804\uDF32\uD804\uDF4D', '\uD804\uDF33\uD804\uDF4D', '\u0BB4\uD804\uDF4D', '\uD804\uDF35\uD804\uDF4D', '\uD804\uDF36\uD804\uDF4D', '\uD804\uDF37\uD804\uDF4D', '\uD804\uDF38\uD804\uDF4D', '\uD804\uDF39\uD804\uDF4D'],
    symbols: ['\u0BE6', '\u0BE7', '\u0BE8', '\u0BE9', '\u0BEA', '\u0BEB', '\u0BEC', '\u0BED', '\u0BEE', '\u0BEF', '\u0964', '\u0965', '\uD804\uDF13\uD804\uDF02', '', '\uD804\uDF01'],
    vowelMarks: ['', '\uD804\uDF3E', '\uD804\uDF3F', '\uD804\uDF40', '\uD804\uDF41', '\uD804\uDF42', '\uD804\uDF43', '\uD804\uDF44', '\uD804\uDF62', '\uD804\uDF63', '\uD804\uDF47', '\uD804\uDF48', '\uD804\uDF4B', '\uD804\uDF4C'],
    vowels: ['\uD804\uDF05', '\uD804\uDF06', '\uD804\uDF07', '\uD804\uDF08', '\uD804\uDF09', '\uD804\uDF0A', '\uD804\uDF0B', '\uD804\uDF60', '\uD804\uDF0C', '\uD804\uDF61', '\uD804\uDF0F', '\uD804\uDF10', '\uD804\uDF13', '\uD804\uDF14']
  }
};

/***/ })
/******/ ]);
});