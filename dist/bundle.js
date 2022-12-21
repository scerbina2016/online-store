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

/***/ "./src/core/basketTop.ts":
/*!*******************************!*\
  !*** ./src/core/basketTop.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction basketTop(className, id, colorName, colBegin, rowBegin) {\r\n    var _a;\r\n    const bodyInner = document.getElementsByTagName('header');\r\n    const headElemCart = document.createElement('div');\r\n    headElemCart.className = className;\r\n    headElemCart.id = id;\r\n    headElemCart.style.cssText = `grid-column: ${colBegin + 1}/${colBegin + 3};\r\n                                         grid-row: ${rowBegin}/${rowBegin + 2};\r\n                                         background-image: url('/dist/images/bascketSign64.png');\r\n                                         \r\n                                         background-size:contain;\r\n                                         background-position:top;\r\n                                         background-repeat: no-repeat;\r\n\r\n                                         position:relative;\r\n                                         top: -2vh`;\r\n    (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', headElemCart);\r\n    headElemCart.addEventListener('pointerover', () => {\r\n        headElemCart.style.cursor = 'pointer';\r\n    });\r\n    headElemCart.addEventListener('pointerout', () => {\r\n        headElemCart.style.cursor = 'inherit'; //'#3dbe45';\r\n    });\r\n    //return [colBegin,rowBegin];\r\n    headElemCart.addEventListener('click', () => {\r\n        headElemCart.style.color = 'red';\r\n        console.log('Make basket in first, stupid!!!');\r\n        // TODO function for works with cart\r\n    });\r\n}\r\nexports[\"default\"] = basketTop;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/basketTop.ts?");

/***/ }),

/***/ "./src/core/cartHead.ts":
/*!******************************!*\
  !*** ./src/core/cartHead.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst basketTop_1 = __importDefault(__webpack_require__(/*! ./basketTop */ \"./src/core/basketTop.ts\"));\r\nfunction cartHead(className, id, colorName, colBegin, rowBegin, fontSize, ...args) {\r\n    var _a;\r\n    const bodyInner = document.getElementsByTagName('header');\r\n    const headElemCart = document.createElement('a');\r\n    headElemCart.className = className;\r\n    headElemCart.id = id;\r\n    headElemCart.innerText = 'Cart';\r\n    headElemCart.style.color = colorName;\r\n    console.log('color =>' + headElemCart.style.color);\r\n    headElemCart.href = '';\r\n    headElemCart.style.cssText = `grid-column: ${colBegin}/${colBegin + 1};\r\n                                     grid-row: ${rowBegin}/${rowBegin + 1};\r\n                                     font-size: ${fontSize};\r\n                                     margin-left:auto`;\r\n    (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', headElemCart);\r\n    headElemCart.addEventListener('pointerover', () => {\r\n        headElemCart.style.color = '#3dbe45';\r\n        headElemCart.style.textDecorationLine = 'underline';\r\n    });\r\n    headElemCart.addEventListener('pointerout', () => {\r\n        headElemCart.style.color = colorName; //'#3dbe45';\r\n        headElemCart.style.textDecorationLine = 'none';\r\n    });\r\n    (0, basketTop_1.default)(className, 'head-bascket-img', colorName, colBegin, rowBegin);\r\n}\r\nexports[\"default\"] = cartHead;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/cartHead.ts?");

/***/ }),

/***/ "./src/core/header.ts":
/*!****************************!*\
  !*** ./src/core/header.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction makeHeader(name, colorName, fontSize) {\r\n    var _a;\r\n    const head = document.createElement('header');\r\n    head.id = 'header-container';\r\n    //document.body.append(head);\r\n    document.body.insertAdjacentElement('afterbegin', head);\r\n    head.style.cssText = `display: grid;\r\n                        grid-template-columns: 1fr repeat(8,10vw) 5vw 5vw 5vw 5vw 1fr;\r\n                        grid-template-rows: 5vh 5vh 5vh;`;\r\n    head.style.color = colorName;\r\n    let bodyInner = document.getElementsByTagName('header');\r\n    let bodyInnerById = bodyInner[0];\r\n    // ===========================================\r\n    let elem = document.createElement('p');\r\n    elem.id = 'header-name';\r\n    elem.style.cssText = `grid-column: 1/5;\r\n                     grid-row: 1/3;\r\n                     font-size: ${fontSize};\r\n                     margin:auto;`;\r\n    elem.innerText = name;\r\n    elem.style.color = colorName;\r\n    // ========================================\r\n    let headerHook = bodyInner[0].id;\r\n    (_a = document.getElementById(headerHook)) === null || _a === void 0 ? void 0 : _a.appendChild(elem);\r\n}\r\nexports[\"default\"] = makeHeader;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/header.ts?");

/***/ }),

/***/ "./src/core/headerNav.ts":
/*!*******************************!*\
  !*** ./src/core/headerNav.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction headerNav(className, id, colorName, colBegin, rowBegin, fontSize, ...args) {\r\n    var _a;\r\n    let bodyInner = document.getElementsByTagName('header');\r\n    for (let i = 0; i < args.length; i++) {\r\n        const headElemNav = document.createElement('a');\r\n        headElemNav.className = className;\r\n        headElemNav.id = `${className}-${i}`;\r\n        headElemNav.innerText = args[i];\r\n        headElemNav.style.color = colorName;\r\n        console.log('color =>' + headElemNav.style.color);\r\n        headElemNav.href = '';\r\n        headElemNav.style.cssText = `grid-column: ${colBegin + i}/${colBegin + i + 1};\r\n                                   grid-row: ${rowBegin}/${rowBegin + 1};\r\n                                   font-size: ${fontSize};`;\r\n        (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', headElemNav);\r\n        headElemNav.addEventListener('pointerover', () => {\r\n            headElemNav.style.color = '#3dbe45';\r\n        });\r\n        headElemNav.addEventListener('pointerout', () => {\r\n            headElemNav.style.color = colorName; //'#3dbe45';\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = headerNav;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/headerNav.ts?");

/***/ }),

/***/ "./src/core/makeMiddleBanner.ts":
/*!**************************************!*\
  !*** ./src/core/makeMiddleBanner.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction makeMiddleBanner(className, id, text, colorName, fontSize, width, height) {\r\n    var _a;\r\n    const banner = document.createElement('section');\r\n    const bodyInner = document.getElementsByTagName('header');\r\n    banner.className = className;\r\n    banner.id = id;\r\n    banner.innerHTML = text;\r\n    banner.style.textAlign = 'center';\r\n    banner.style.verticalAlign = 'middle';\r\n    banner.style.width = width;\r\n    banner.style.height = height;\r\n    banner.style.color = colorName;\r\n    banner.style.backgroundColor = '#caeecd';\r\n    banner.style.fontSize = fontSize;\r\n    banner.style.borderColor = colorName;\r\n    banner.style.borderStyle = 'solid';\r\n    banner.style.borderWidth = '0.5vh';\r\n    banner.style.marginTop = '0.5vh';\r\n    banner.style.paddingTop = '1vh'; // TODO make to center\r\n    (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterend', banner);\r\n    //const bannerId = document.getElementById(id);\r\n    //console.log('elem id ==>>' + bannerId?.id);\r\n    //document.body.insertAdjacentElement('beforeend', banner);\r\n}\r\nexports[\"default\"] = makeMiddleBanner;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/makeMiddleBanner.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst app_1 = __importDefault(__webpack_require__(/*! ./pages/app */ \"./src/pages/app/index.ts\"));\r\nconst header_1 = __importDefault(__webpack_require__(/*! ./core/header */ \"./src/core/header.ts\"));\r\nconst headerNav_1 = __importDefault(__webpack_require__(/*! ./core/headerNav */ \"./src/core/headerNav.ts\"));\r\nconst cartHead_1 = __importDefault(__webpack_require__(/*! ./core/cartHead */ \"./src/core/cartHead.ts\"));\r\nconst makeMiddleBanner_1 = __importDefault(__webpack_require__(/*! ./core/makeMiddleBanner */ \"./src/core/makeMiddleBanner.ts\"));\r\nconst app = new app_1.default();\r\n(0, header_1.default)('Online store', '#06560b', '7vh');\r\n(0, headerNav_1.default)('head-naw', 'head-container', '#06560b', 5, 2, '3vh', 'About as', 'Free sale', 'Top sale');\r\n(0, cartHead_1.default)('head-cart', 'head-cart-top', '#06560b', 9, 2, '5vh', 'Cart');\r\n(0, makeMiddleBanner_1.default)('main-banner', 'main-banner-top', 'Buy And Be Happy', '#06560b', '7vh', '100vw', '14vh');\r\nconsole.log(`It's working ===================444444`);\r\n\n\n//# sourceURL=webpack://online-store/./src/index.ts?");

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