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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! exports provided: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony import */ var _classes_FormValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/FormValidator */ \"./src/app/classes/FormValidator.js\");\n/* harmony import */ var _utils_getter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getter */ \"./src/app/utils/getter.js\");\n/* harmony import */ var _utils_setter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/setter */ \"./src/app/utils/setter.js\");\n/* harmony import */ var _classes_ErrorBundler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/ErrorBundler */ \"./src/app/classes/ErrorBundler.js\");\n\r\n\r\n\r\n\r\n\r\nconst run = ()=>{\r\n    let button = document.getElementById('summarise');\r\n    button.addEventListener('click',()=>{\r\n        let validator = new _classes_FormValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Object(_utils_getter__WEBPACK_IMPORTED_MODULE_1__[\"getter\"])());\r\n        if(validator.validate()){\r\n            let data = Object(_utils_getter__WEBPACK_IMPORTED_MODULE_1__[\"getter\"])();\r\n            Object(_utils_setter__WEBPACK_IMPORTED_MODULE_2__[\"setter\"])(data.firstField+data.secondField);\r\n        }else{\r\n            let errorBundler = new _classes_ErrorBundler__WEBPACK_IMPORTED_MODULE_3__[\"default\"](validator);\r\n            errorBundler.parseError();\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/app/app.js?");

/***/ }),

/***/ "./src/app/classes/ErrorBundler.js":
/*!*****************************************!*\
  !*** ./src/app/classes/ErrorBundler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBundler; });\n/* harmony import */ var _utils_setter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setter */ \"./src/app/utils/setter.js\");\n\r\n\r\nclass ErrorBundler {\r\n    constructor(validator) {\r\n        this.validator = validator;\r\n    }\r\n    parseError(){\r\n        if(!this.validator.isIntegers || !this.validator.isStrings){\r\n            Object(_utils_setter__WEBPACK_IMPORTED_MODULE_0__[\"setter\"])('Inputs should be strings or integers!');\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/app/classes/ErrorBundler.js?");

/***/ }),

/***/ "./src/app/classes/FormValidator.js":
/*!******************************************!*\
  !*** ./src/app/classes/FormValidator.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormValidator; });\nclass  FormValidator {\r\n    constructor(data) {\r\n        this.firstField = data.firstField;\r\n        this.secondField = data.secondField;\r\n        this.isIntegers = false;\r\n        this.isStrings = false;\r\n    }\r\n\r\n    validate() {\r\n        if (this.validateIntegers) {\r\n            this.isIntegers = true;\r\n            return true;\r\n        } else if (this.validateStrings) {\r\n            this.isStrings = true;\r\n            return true;\r\n        }\r\n        return false\r\n    }\r\n\r\n    validateIntegers() {\r\n\r\n        return (typeof(this.firstField) == \"number\")&&(typeof(this.secondField)==\"number\");\r\n    }\r\n\r\n    validateStrings() {\r\n        return (typeof(this.firstField) == \"string\")&&(typeof(this.secondField)==\"string\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app/classes/FormValidator.js?");

/***/ }),

/***/ "./src/app/utils/getter.js":
/*!*********************************!*\
  !*** ./src/app/utils/getter.js ***!
  \*********************************/
/*! exports provided: getter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getter\", function() { return getter; });\nconst getter = ()=>{\r\n    let fistField=document.getElementById(\"field-1\").value;\r\n    let secondField=document.getElementById(\"field-2\").value;\r\n    if(parseInt(fistField)) fistField = parseInt(fistField);\r\n    console.log(fistField);\r\n    if(parseInt(secondField)) secondField = parseInt(secondField);\r\n    return {\r\n        firstField:fistField,\r\n        secondField:secondField,\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/app/utils/getter.js?");

/***/ }),

/***/ "./src/app/utils/setter.js":
/*!*********************************!*\
  !*** ./src/app/utils/setter.js ***!
  \*********************************/
/*! exports provided: setter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setter\", function() { return setter; });\nconst setter = (data)=>{\r\n    let resultFiled = document.getElementById('result');\r\n    resultFiled.innerText = data;\r\n};\n\n//# sourceURL=webpack:///./src/app/utils/setter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ \"./src/app/app.js\");\n\r\nObject(_app_app__WEBPACK_IMPORTED_MODULE_0__[\"run\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });