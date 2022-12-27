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

/***/ "./src/core/brandArrMakes.ts":
/*!***********************************!*\
  !*** ./src/core/brandArrMakes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction brandArrMakes(giftsData2, field) {\r\n    let brandList = [];\r\n    let asd = [];\r\n    let counter = 0;\r\n    for (let i = 0; i < giftsData2.length; i++) {\r\n        asd[i] = giftsData2[i].brand;\r\n    }\r\n    brandList[0] = asd[0];\r\n    for (let i = 1; i < asd.length; i++) {\r\n        if (giftsData2[i].brand !== giftsData2[i - 1].brand) {\r\n            counter += 1;\r\n            brandList[counter] = asd[i];\r\n        }\r\n    }\r\n    for (let i = 1; i < brandList.length; i++) {\r\n        if (brandList.indexOf(brandList[i]) !== brandList.lastIndexOf(brandList[i])) {\r\n            brandList.splice(brandList.lastIndexOf(brandList[i]), 1);\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    return brandList;\r\n}\r\nexports[\"default\"] = brandArrMakes;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/brandArrMakes.ts?");

/***/ }),

/***/ "./src/core/cartHead.ts":
/*!******************************!*\
  !*** ./src/core/cartHead.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst basketTop_1 = __importDefault(__webpack_require__(/*! ./basketTop */ \"./src/core/basketTop.ts\"));\r\nfunction cartHead(className, id, colorName, colBegin, rowBegin, fontSize, ...args) {\r\n    var _a;\r\n    const bodyInner = document.getElementsByTagName('header');\r\n    const headElemCart = document.createElement('a');\r\n    headElemCart.className = className;\r\n    headElemCart.id = id;\r\n    headElemCart.innerText = 'Cart';\r\n    headElemCart.style.color = colorName;\r\n    console.log('color =>' + headElemCart.style.color);\r\n    headElemCart.href = '';\r\n    headElemCart.style.cssText = `grid-column: ${colBegin}/${colBegin + 1};\r\n                                     grid-row: ${rowBegin}/${rowBegin + 1};\r\n                                     font-size: ${fontSize};\r\n                                     margin-left:auto`;\r\n    (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', headElemCart);\r\n    headElemCart.addEventListener('pointerover', () => {\r\n        headElemCart.style.color = '#3dbe45';\r\n        headElemCart.style.textDecorationLine = 'underline';\r\n    });\r\n    headElemCart.addEventListener('pointerout', () => {\r\n        headElemCart.style.color = colorName; //'#3dbe45';\r\n        headElemCart.style.textDecorationLine = 'none';\r\n    });\r\n    (0, basketTop_1.default)(className, 'head-bascket-img', colorName, colBegin, rowBegin);\r\n}\r\nexports[\"default\"] = cartHead;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/cartHead.ts?");

/***/ }),

/***/ "./src/core/categoryArrMakes.ts":
/*!**************************************!*\
  !*** ./src/core/categoryArrMakes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction categoryArrMakes(giftsData2, field) {\r\n    let brandList = [];\r\n    let asd = [];\r\n    let counter = 0;\r\n    for (let i = 0; i < giftsData2.length; i++) {\r\n        asd[i] = giftsData2[i].category;\r\n    }\r\n    brandList[0] = asd[0];\r\n    for (let i = 1; i < asd.length; i++) {\r\n        if (giftsData2[i].category !== giftsData2[i - 1].category) {\r\n            counter += 1;\r\n            brandList[counter] = asd[i];\r\n        }\r\n    }\r\n    for (let i = 1; i < brandList.length; i++) {\r\n        if (brandList.indexOf(brandList[i]) !== brandList.lastIndexOf(brandList[i])) {\r\n            brandList.splice(brandList.lastIndexOf(brandList[i]), 1);\r\n        }\r\n        ;\r\n    }\r\n    ;\r\n    return brandList;\r\n}\r\nexports[\"default\"] = categoryArrMakes;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/categoryArrMakes.ts?");

/***/ }),

/***/ "./src/core/choicePanelIns.ts":
/*!************************************!*\
  !*** ./src/core/choicePanelIns.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction choicePanelIns(name, nameNeed, className, id, inBlockClass, colorName, fontSize, width, height, borderColor, borderWidth, borderRadius, display, flexDir, flexWrap, overflow) {\r\n    var _a, _b;\r\n    const bodyInner = document.getElementsByClassName(inBlockClass);\r\n    if (nameNeed === 'need') {\r\n        const nameField = document.createElement('p');\r\n        nameField.innerText = name;\r\n        nameField.style.color = colorName;\r\n        nameField.style.margin = '1vh auto 1vh auto';\r\n        nameField.style.borderBottom = `0.5vh solid ${borderColor}`;\r\n        (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', nameField);\r\n    }\r\n    const mainField = document.createElement('section');\r\n    mainField.className = className;\r\n    mainField.id = id;\r\n    mainField.style.color = colorName;\r\n    mainField.style.fontSize = fontSize;\r\n    mainField.style.width = width;\r\n    mainField.style.height = height;\r\n    mainField.style.display = display;\r\n    mainField.style.flexWrap = flexWrap;\r\n    mainField.style.flexDirection = flexDir;\r\n    mainField.style.borderColor = borderColor;\r\n    mainField.style.borderWidth = borderWidth;\r\n    mainField.style.borderStyle = 'solid';\r\n    mainField.style.borderRadius = borderRadius;\r\n    mainField.style.marginLeft = '0.5vh';\r\n    mainField.style.marginRight = '0.5vh';\r\n    mainField.style.marginTop = '0.5vh';\r\n    mainField.style.marginBottom = '0.5vh';\r\n    mainField.style.overflowY = overflow;\r\n    mainField.style.padding = 'auto';\r\n    mainField.style.justifyContent = 'space-around';\r\n    (_b = document.getElementById(bodyInner[0].id)) === null || _b === void 0 ? void 0 : _b.insertAdjacentElement('beforeend', mainField);\r\n}\r\nexports[\"default\"] = choicePanelIns;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/choicePanelIns.ts?");

/***/ }),

/***/ "./src/core/fillGifts.ts":
/*!*******************************!*\
  !*** ./src/core/fillGifts.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction fillGifts(giftsData, className, id, inBlockClass, colorName, fontSize, width, height, borderColor, borderWidth, borderRadius, flexDir, overflow) {\r\n    var _a, _b, _c, _d, _e, _f;\r\n    const bodyInner = document.getElementsByClassName(inBlockClass);\r\n    for (let i = 0; i < giftsData.length; i++) {\r\n        const mainField = document.createElement('section');\r\n        //mainField.innerHTML = giftContainerHTML;\r\n        mainField.className = `${className}-${i}`;\r\n        mainField.id = `${id}-${i}`;\r\n        mainField.style.color = colorName;\r\n        mainField.style.fontSize = fontSize;\r\n        mainField.style.width = width;\r\n        mainField.style.height = height;\r\n        mainField.style.display = 'flex';\r\n        mainField.style.flexDirection = flexDir;\r\n        mainField.style.borderColor = borderColor;\r\n        mainField.style.borderWidth = borderWidth;\r\n        mainField.style.borderStyle = 'solid';\r\n        mainField.style.borderRadius = borderRadius;\r\n        mainField.style.marginLeft = '0.5vh';\r\n        mainField.style.marginRight = '0.5vh';\r\n        mainField.style.marginTop = '0.5vh';\r\n        mainField.style.marginBottom = '0.5vh';\r\n        mainField.style.overflowY = overflow;\r\n        mainField.style.padding = 'auto';\r\n        /*mainField.style.backgroundImage = `url(${giftsData[i].images[0]})`;\r\n        mainField.style.backgroundSize = 'contain';\r\n        mainField.style.backgroundRepeat = 'no-repeat';*/\r\n        /*const giftName:HTMLCollectionOf<Element> = document.getElementById(\"gift-in-name\");\r\n        giftName[0].innerHTML = giftsData[0].title;\r\n        console.log('TITLE');\r\n        console.log(giftsData[0].title);*/\r\n        //   ============================= fill gift container =======================================\r\n        (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('beforeend', mainField);\r\n        const giftIn = document.getElementsByClassName(`${className}-${i}`);\r\n        const giftName = document.createElement('div');\r\n        giftName.className = 'gift-container-in';\r\n        giftName.id = `gift-in-name-${giftsData[i].id}`;\r\n        giftName.innerHTML = `<abbr title=\"${giftsData[i].description}\">${giftsData[i].title}</abbr>`;\r\n        (_b = document.getElementById(giftIn[0].id)) === null || _b === void 0 ? void 0 : _b.insertAdjacentElement('beforeend', giftName);\r\n        const giftIMG = document.createElement('div');\r\n        giftIMG.className = 'gift-container-in';\r\n        giftIMG.id = `gift-in-img-${giftsData[i].id}`;\r\n        giftIMG.style.backgroundImage = `url(${giftsData[i].images[0]})`;\r\n        giftIMG.style.backgroundSize = 'cover';\r\n        giftIMG.style.backgroundRepeat = 'no-repeat';\r\n        giftIMG.style.backgroundPosition = 'left';\r\n        giftIMG.style.width = '100%';\r\n        giftIMG.style.height = '100%';\r\n        (_c = document.getElementById(giftIn[0].id)) === null || _c === void 0 ? void 0 : _c.insertAdjacentElement('beforeend', giftIMG);\r\n        const giftPrice = document.createElement('div');\r\n        giftPrice.className = 'gift-container-in';\r\n        giftPrice.id = `gift-in-price-${giftsData[i].id}`;\r\n        giftPrice.innerHTML = `<p>Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</p>`;\r\n        // `<abbr title=\"${giftsData[i].description}\">Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</abbr>`\r\n        giftPrice.style.color = colorName;\r\n        giftPrice.style.fontSize = fontSize;\r\n        (_d = document.getElementById(giftIn[0].id)) === null || _d === void 0 ? void 0 : _d.insertAdjacentElement('beforeend', giftPrice);\r\n        const giftInCart = document.createElement('div');\r\n        giftInCart.className = 'gift-container-in';\r\n        giftInCart.id = `gift-in-cart-${giftsData[i].id}`;\r\n        giftInCart.innerText = `Add to cart`;\r\n        giftInCart.style.display = 'inline-block';\r\n        // `<abbr title=\"${giftsData[i].description}\">Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</abbr>`\r\n        giftInCart.style.color = colorName;\r\n        giftInCart.style.fontSize = fontSize;\r\n        giftInCart.style.borderColor = borderColor;\r\n        giftInCart.style.borderWidth = borderWidth;\r\n        giftInCart.style.borderStyle = 'solid';\r\n        giftInCart.style.borderRadius = borderRadius;\r\n        giftInCart.style.cursor = 'pointer';\r\n        // ================== listener for add to cart ==================== \r\n        giftInCart.addEventListener('click', () => {\r\n            alert(`add to cart button click => ${giftInCart.id}`);\r\n        });\r\n        // =================== end of listener for add to cart ====================\r\n        (_e = document.getElementById(giftIn[0].id)) === null || _e === void 0 ? void 0 : _e.insertAdjacentElement('beforeend', giftInCart);\r\n        const giftInDetalis = document.createElement('div');\r\n        giftInDetalis.className = 'gift-container-in';\r\n        giftInDetalis.id = `gift-in-detalis-${giftsData[i].id}`;\r\n        giftInDetalis.innerText = `Detalis`;\r\n        giftInDetalis.style.display = 'inline-block';\r\n        // `<abbr title=\"${giftsData[i].description}\">Price: ${String.fromCharCode(8364)} ${giftsData[i].price}</abbr>`\r\n        giftInDetalis.style.color = colorName;\r\n        giftInDetalis.style.borderColor = borderColor;\r\n        giftInDetalis.style.fontSize = fontSize;\r\n        giftInDetalis.style.borderWidth = borderWidth;\r\n        giftInDetalis.style.borderStyle = 'solid';\r\n        giftInDetalis.style.borderRadius = borderRadius;\r\n        giftInDetalis.style.cursor = 'pointer';\r\n        // ================== listener for add to cart ==================== \r\n        giftInDetalis.addEventListener('click', () => {\r\n            alert(`DETALIS button click => ${giftInDetalis.id}`);\r\n        });\r\n        // =================== end of listener for add to cart ====================\r\n        (_f = document.getElementById(giftIn[0].id)) === null || _f === void 0 ? void 0 : _f.insertAdjacentElement('beforeend', giftInDetalis);\r\n        giftInDetalis.addEventListener('pointerover', () => {\r\n            giftInDetalis.style.color = 'red';\r\n        });\r\n        giftInDetalis.addEventListener('pointerout', () => {\r\n            giftInDetalis.style.color = colorName; //'#3dbe45';\r\n        });\r\n    }\r\n}\r\nexports[\"default\"] = fillGifts;\r\nlet a = `  <div class=\"gift-container-in\" id=\"gift-in-name\"></div>\r\n                                   <div class=\"gift-container-in\" id=\"gift-in-img\"></div>\r\n                                   <div class=\"gift-container-in\" id=\"gift-in-price\"></div>\r\n                                   <div class=\"gift-container-in\" id=\"gift-in-description\"></div>\r\n                                   <div class=\"gift-container-in\" id=\"but-gift-in-add\"></div>\r\n                                   <div class=\"gift-container-in\" id=\"gift-in-detalis\"></div>`;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/fillGifts.ts?");

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

/***/ "./src/core/listMaker.ts":
/*!*******************************!*\
  !*** ./src/core/listMaker.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction listMakers(fromArr, className, id, inBlockClass, colorName, fontSize) {\r\n    var _a;\r\n    const bodyInner = document.getElementsByClassName(inBlockClass);\r\n    for (let i = 0; i < fromArr.length; i++) {\r\n        const mainField = document.createElement('div');\r\n        mainField.className = className;\r\n        mainField.id = `${id}-${i}`;\r\n        mainField.style.color = colorName;\r\n        mainField.style.fontSize = fontSize;\r\n        mainField.style.marginLeft = '0.5vh';\r\n        mainField.style.marginTop = '0.5vh';\r\n        mainField.innerText = fromArr[i];\r\n        (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterbegin', mainField);\r\n    }\r\n}\r\nexports[\"default\"] = listMakers;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/listMaker.ts?");

/***/ }),

/***/ "./src/core/makeMainField.ts":
/*!***********************************!*\
  !*** ./src/core/makeMainField.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction makeMainField(className, id, afterBlock, colorName, fontSize, width, height) {\r\n    var _a;\r\n    const mainField = document.createElement('section');\r\n    const bodyInner = document.getElementsByClassName(afterBlock);\r\n    mainField.className = className;\r\n    mainField.id = id;\r\n    mainField.style.color = colorName;\r\n    mainField.style.fontSize = fontSize;\r\n    mainField.style.width = width;\r\n    mainField.style.display = 'flex';\r\n    (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterend', mainField);\r\n}\r\nexports[\"default\"] = makeMainField;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/makeMainField.ts?");

/***/ }),

/***/ "./src/core/makeMiddleBanner.ts":
/*!**************************************!*\
  !*** ./src/core/makeMiddleBanner.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nfunction makeMiddleBanner(className, id, text, colorName, fontSize, width, height, borderRadius) {\r\n    var _a;\r\n    const banner = document.createElement('section');\r\n    const bodyInner = document.getElementsByTagName('header');\r\n    banner.className = className;\r\n    banner.id = id;\r\n    banner.innerHTML = text;\r\n    banner.style.textAlign = 'center';\r\n    banner.style.verticalAlign = 'middle';\r\n    banner.style.width = width;\r\n    banner.style.height = height;\r\n    banner.style.color = colorName;\r\n    banner.style.backgroundColor = '#caeecd';\r\n    banner.style.fontSize = fontSize;\r\n    banner.style.borderColor = colorName;\r\n    banner.style.borderStyle = 'solid';\r\n    banner.style.borderWidth = '0.5vh';\r\n    banner.style.marginTop = '0.5vh';\r\n    banner.style.paddingTop = '1vh'; // TODO make to center\r\n    banner.style.borderRadius = borderRadius;\r\n    (_a = document.getElementById(bodyInner[0].id)) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterend', banner);\r\n    //const bannerId = document.getElementById(id);\r\n    //console.log('elem id ==>>' + bannerId?.id);\r\n    //document.body.insertAdjacentElement('beforeend', banner);\r\n}\r\nexports[\"default\"] = makeMiddleBanner;\r\n\n\n//# sourceURL=webpack://online-store/./src/core/makeMiddleBanner.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst header_1 = __importDefault(__webpack_require__(/*! ./core/header */ \"./src/core/header.ts\"));\r\nconst headerNav_1 = __importDefault(__webpack_require__(/*! ./core/headerNav */ \"./src/core/headerNav.ts\"));\r\nconst cartHead_1 = __importDefault(__webpack_require__(/*! ./core/cartHead */ \"./src/core/cartHead.ts\"));\r\nconst makeMiddleBanner_1 = __importDefault(__webpack_require__(/*! ./core/makeMiddleBanner */ \"./src/core/makeMiddleBanner.ts\"));\r\nconst makeMainField_1 = __importDefault(__webpack_require__(/*! ./core/makeMainField */ \"./src/core/makeMainField.ts\"));\r\nconst choicePanelIns_1 = __importDefault(__webpack_require__(/*! ./core/choicePanelIns */ \"./src/core/choicePanelIns.ts\"));\r\nconst brandArrMakes_1 = __importDefault(__webpack_require__(/*! ./core/brandArrMakes */ \"./src/core/brandArrMakes.ts\"));\r\nconst categoryArrMakes_1 = __importDefault(__webpack_require__(/*! ./core/categoryArrMakes */ \"./src/core/categoryArrMakes.ts\"));\r\nconst listMaker_1 = __importDefault(__webpack_require__(/*! ./core/listMaker */ \"./src/core/listMaker.ts\"));\r\nconst fillGifts_1 = __importDefault(__webpack_require__(/*! ./core/fillGifts */ \"./src/core/fillGifts.ts\"));\r\n//import getDbFromServer from './components/modules/getDbFromServer'\r\n//const app = new App();\r\nlet arrExp = [];\r\nconst URL = 'https://scerbina2016.github.io/online-store/src/components/db/giftsEn.json';\r\nconst request = (method, url, body = null) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const request = yield fetch(url, {\r\n        method: method,\r\n        body: body\r\n    });\r\n    return yield request.json();\r\n});\r\n//===========================================================\r\n//==========================================================\r\nconst start = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    let a = yield request('GET', URL);\r\n    //console.log(a);\r\n    console.log(a.limit);\r\n    for (let i = 0; i < a.limit; i++) {\r\n        arrExp = a.products; // json to arr\r\n    }\r\n    console.log(arrExp[0]);\r\n    const brandList = (0, brandArrMakes_1.default)(arrExp, 'brand');\r\n    const categoryList = (0, categoryArrMakes_1.default)(arrExp, 'category');\r\n    (0, header_1.default)('Online store', '#06560b', '7vh');\r\n    (0, headerNav_1.default)('head-naw', 'head-container', '#06560b', 5, 2, '3vh', 'About as', 'Free sale', 'Top sale');\r\n    (0, cartHead_1.default)('head-cart', 'head-cart-top', '#06560b', 9, 2, '5vh', 'Cart');\r\n    (0, makeMiddleBanner_1.default)('main-banner', 'main-banner-top', 'Buy And Be Happy', '#06560b', '7vh', '98vw', '14vh', '2vh');\r\n    (0, makeMainField_1.default)('main-field', 'main-container', 'main-banner', 'red', '3vh', '98vw');\r\n    (0, choicePanelIns_1.default)('', 'dont', 'main-field-choice', 'main-choice', 'main-field', '#06560b', '3vh', '50vh', '100vh', '#06560b', '0.5vh', '2vh', 'flex', 'column', 'nowrap', 'none');\r\n    (0, choicePanelIns_1.default)('Category', 'need', 'main-field-category', 'choice-category', 'main-field-choice', '#06560b', '3vh', '48vh', '50vh', '#06560b', '0.5vh', '1vh', 'flex', 'column', 'nowrap', 'scroll');\r\n    (0, choicePanelIns_1.default)('Brand', 'need', 'main-field-brand', 'choice-brand', 'main-field-choice', '#06560b', '3vh', '48vh', '50vh', '#06560b', '0.5vh', '1vh', 'flex', 'column', 'nowrap', 'scroll');\r\n    (0, choicePanelIns_1.default)('', 'dont', 'main-field-gifts', 'main-gifts', 'main-field', '#06560b', '3vh', '100%', '', '#06560b', '0.5vh', '2vh', 'flex', 'row', 'wrap', 'none');\r\n    (0, listMaker_1.default)(categoryList, 'category-list', 'category-list', 'main-field-category', 'red', '3vh');\r\n    (0, listMaker_1.default)(brandList, 'brand-list', 'brand-list', 'main-field-brand', 'green', '3vh');\r\n    (0, choicePanelIns_1.default)('', 'dont', 'gifts-top', 'gifts-serch-rest', 'main-field-gifts', '#06560b', '3vh', '99.5%', '10vh', '#06560b', '0.5vh', '2vh', 'flex', 'column', 'nowrap', 'none');\r\n    (0, fillGifts_1.default)(arrExp, 'gift-container', 'gift-id', 'main-field-gifts', '#08300a', '1.8vw', '23%', '25vw', '#06560b', '0.5vh', '2vh', 'column', 'none');\r\n    console.log(`It's working ===================444444`);\r\n}); // asinc function end\r\nstart(); // all begin !!!!!!!!!!!!!!!!!!!\r\n\n\n//# sourceURL=webpack://online-store/./src/index.ts?");

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