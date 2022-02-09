/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://javascript-capstone/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_apiCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiCall.js */ \"./src/modules/apiCall.js\");\n/* harmony import */ var _modules_renderStrucure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderStrucure.js */ \"./src/modules/renderStrucure.js\");\n\r\n\r\n\r\n\r\nconst starter = async () => {\r\n  const data = await (0,_modules_apiCall_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  await (0,_modules_renderStrucure_js__WEBPACK_IMPORTED_MODULE_2__.render)(data);\r\n};\r\n\r\nstarter();\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCall.js":
/*!********************************!*\
  !*** ./src/modules/apiCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMovies = async () => {\r\n  const moviesData = await fetch(\"https://api.tvmaze.com/shows?page=1\");\r\n  const allData = await moviesData.json();\r\n  return allData;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/apiCall.js?");

/***/ }),

/***/ "./src/modules/renderStrucure.js":
/*!***************************************!*\
  !*** ./src/modules/renderStrucure.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\nconst showComment = async () => {\r\n  const moviesData = await fetch(\"https://api.tvmaze.com/shows?page=1\");\r\n  const allData = await moviesData.json();\r\n  const content = document.createElement(\"div\");\r\n  body.append(content);\r\n};\r\n\r\nconst render = (data) => {\r\n  data.forEach((e) => {\r\n    const list = document.getElementById(\"moviesList\");\r\n    list.innerHTML += `\r\n    <div class=\"grid-items\">\r\n    <ul class=\"image-card\">\r\n    <img src=\"${e.image.original}\" alt=\"\">\r\n    </ul>\r\n    <div class=\"subtitles\">\r\n    <h4>${e.name}  <i class=\"fa fa-heart\"></i></h4>\r\n    </div>\r\n    <button onClick=\"showComment()\" class=\"btn\" id=\"button\">Comments</button>\r\n    </div>\r\n  `;\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://javascript-capstone/./src/modules/renderStrucure.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;