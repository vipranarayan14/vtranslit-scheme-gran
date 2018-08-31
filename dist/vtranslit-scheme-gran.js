window["vTranslitSchemeGran"] =
/******/ (function(modules) { // webpackBootstrap
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
    'unicodeBlock': '11300— 1137F'
  },
  'data': {
    'ayogavaha': ['\u11302', '\u11303'],
    'consonants': ['', '𑌖', '𑌗', '𑌘', '𑌙', '𑌚', '𑌛', '𑌜', '𑌝', '𑌞', '𑌟', '𑌠', '𑌡', '𑌢', '𑌣', '𑌤', '𑌥', '𑌦', '𑌧', '𑌨', 'ன', '𑌪', '𑌫', '𑌬', '𑌭', '𑌮', '𑌯', '𑌰', 'ற', '𑌲', '𑌳', 'ழ', '𑌵', '𑌶', '𑌷', '𑌸', '𑌹'],
    'deadConsonants': ['𑍍‌', '𑌖𑍍‌', '𑌗𑍍‌', '𑌘𑍍‌', '𑌙𑍍‌', '𑌚𑍍‌', '𑌛𑍍‌', '𑌜𑍍‌', '𑌝𑍍‌', '𑌞𑍍‌', '𑌟𑍍‌', '𑌠𑍍‌', '𑌡𑍍‌', '𑌢𑍍‌', '𑌣𑍍‌', '𑌤𑍍‌', '𑌥𑍍‌', '𑌦𑍍‌', '𑌧𑍍‌', '𑌨𑍍‌', 'ன𑍍‌', '𑌪𑍍‌', '𑌫𑍍‌', '𑌬𑍍‌', '𑌭𑍍‌', '𑌮𑍍‌', '𑌯𑍍‌', '𑌰𑍍‌', 'ற𑍍‌', '𑌲𑍍‌', '𑌳𑍍‌', 'ழ𑍍‌', '𑌵𑍍‌', '𑌶𑍍‌', '𑌷𑍍‌', '𑌸𑍍‌', '𑌹𑍍‌'],
    'symbols': ['௦', '௧', '௨', '௩', '௪', '௫', '௬', '௭', '௮', '௯', '।', '॥', '𑌓𑌂', '', ''],
    'vowelMarks': ['𑌅', '𑌆', '𑌇', '𑌈', '𑌉', '𑌊', '𑌋', '𑍠', '𑌌', '𑍡', '', '𑌏', '𑌐', '', '𑌓', '𑌔'],
    'vowels': ['', '𑌾', '𑌿', '𑍀', '𑍁', '𑍂', '𑍃', '𑍄', '𑍢', '𑍣', '', '𑍇', '𑍈', '', '𑍋', '𑍌']
  }
};

/***/ })
/******/ ])["vTranslitSchemeGran"];