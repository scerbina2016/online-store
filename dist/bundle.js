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

/***/ "./src/core/header.ts":
/*!****************************!*\
  !*** ./src/core/header.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction makeHeader(name, colorName) {\r\n    var _a;\r\n    const head = document.createElement('header');\r\n    head.id = 'header-container';\r\n    document.body.append(head);\r\n    head.style.cssText = `display: grid;\r\n                        grid-template-columns: 1fr repeat(10,10vw) 1fr;\r\n                        grid-template-rows: 50px 50px 50px;`;\r\n    let bodyInner = document.getElementsByTagName('header');\r\n    let bodyInnerById = bodyInner[0];\r\n    let elem = document.createElement('p');\r\n    elem.id = 'paragraf2';\r\n    elem.style.cssText = `grid-column: 2/6;\r\n                     grid-row: 1/3;\r\n                     border: 1px solid red;\r\n                     font-size: 5vmin;`;\r\n    elem.innerText = name;\r\n    elem.style.color = colorName;\r\n    let headerHook = bodyInner[0].id;\r\n    (_a = document.getElementById(headerHook)) === null || _a === void 0 ? void 0 : _a.appendChild(elem);\r\n}\r\nexports[\"default\"] = makeHeader;\r\n/*let bodyInner = document.getElementsByTagName('header');\r\nlet bodyInnerById = bodyInner[0];\r\nbodyInnerById.style.cssText= `display: flex;\r\n                              flex-direction:column;  `;\r\nlet elem = document.createElement('p');\r\nelem.id = 'paragraf2';\r\nelem.innerText = 'par 2 elem from code'\r\nlet headerHook= bodyInner[0].id;\r\ndocument.getElementById(headerHook)?.appendChild(elem);*/ \r\n\n\n//# sourceURL=webpack://online-store/./src/core/header.ts?");

/***/ }),

/***/ "./src/core/headerNav.ts":
/*!*******************************!*\
  !*** ./src/core/headerNav.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction headerNav(id, ...args) {\r\n    const wherePlace = document.getElementById(id);\r\n    console.log(wherePlace);\r\n}\r\nexports[\"default\"] = headerNav;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/headerNav.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_1 = __importDefault(__webpack_require__(/*! ./pages/app */ \"./src/pages/app/index.ts\"));\r\nconst header_1 = __importDefault(__webpack_require__(/*! ./core/header */ \"./src/core/header.ts\"));\r\nconst headerNav_1 = __importDefault(__webpack_require__(/*! ./core/headerNav */ \"./src/core/headerNav.ts\"));\r\nconst app = new app_1.default();\r\n(0, header_1.default)('Online store', '#0a470e');\r\n(0, headerNav_1.default)('head-container', 'Home', 'About', 'Popular', 'Etc');\r\nconsole.log(`It's working ===================444444`);\r\n\n\n//# sourceURL=webpack://online-store/./src/index.ts?");

/***/ }),

/***/ "./src/pages/app/index.ts":
/*!********************************!*\
  !*** ./src/pages/app/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst main_1 = __importDefault(__webpack_require__(/*! ../main */ \"./src/pages/main/index.ts\"));\r\nclass App {\r\n    constructor() {\r\n        this.container = document.body;\r\n        this.initialPage = new main_1.default('main-page');\r\n    }\r\n    run() {\r\n        const MainPageHTML = this.initialPage.render();\r\n        this.container.append(MainPageHTML);\r\n    }\r\n}\r\nexports[\"default\"] = App;\r\n\n\n//# sourceURL=webpack://online-store/./src/pages/app/index.ts?");

/***/ }),

/***/ "./src/pages/main/index.ts":
/*!*********************************!*\
  !*** ./src/pages/main/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nclass MainPage {\r\n    constructor(id) {\r\n        this.container = document.createElement('div');\r\n        this.container.id = id;\r\n    }\r\n    createHeaderTitle(text) {\r\n        const headrTitle = document.createElement('h1');\r\n        headrTitle.innerText = text;\r\n        return headrTitle;\r\n    }\r\n    render() {\r\n        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);\r\n        this.container.append(title);\r\n        return this.container;\r\n    }\r\n}\r\nMainPage.TextObject = {\r\n    MainTitle: 'Main page',\r\n};\r\nexports[\"default\"] = MainPage;\r\n\n\n//# sourceURL=webpack://online-store/./src/pages/main/index.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;