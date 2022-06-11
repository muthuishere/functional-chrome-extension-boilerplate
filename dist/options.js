/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/options/usecases/changeDefaultColor.js":
/*!****************************************************!*\
  !*** ./src/options/usecases/changeDefaultColor.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onColorChange": () => (/* binding */ onColorChange)
/* harmony export */ });
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/storage.service */ "./src/services/storage.service.js");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _optionPageBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./optionPageBuilder */ "./src/options/usecases/optionPageBuilder.js");





function onColorChange(selectedButton) {

    let classSelector = "." + _optionPageBuilder__WEBPACK_IMPORTED_MODULE_2__.selectedClassName;
    const previousSelectedButton = (0,_services_dom_service__WEBPACK_IMPORTED_MODULE_1__.querySelectorOnParent)(selectedButton, classSelector);


    if (previousSelectedButton && previousSelectedButton !== selectedButton) {
        (0,_services_dom_service__WEBPACK_IMPORTED_MODULE_1__.removeClassFrom)(previousSelectedButton, _optionPageBuilder__WEBPACK_IMPORTED_MODULE_2__.selectedClassName);
    }


    let color = (0,_services_dom_service__WEBPACK_IMPORTED_MODULE_1__.getDataAttribute)(selectedButton,"color") ;
    (0,_services_dom_service__WEBPACK_IMPORTED_MODULE_1__.addClassTo)(selectedButton, _optionPageBuilder__WEBPACK_IMPORTED_MODULE_2__.selectedClassName);

    _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.storageApi.set({ color });

}


/***/ }),

/***/ "./src/options/usecases/optionPageBuilder.js":
/*!***************************************************!*\
  !*** ./src/options/usecases/optionPageBuilder.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvailableColorButtons": () => (/* binding */ getAvailableColorButtons),
/* harmony export */   "presetButtonColors": () => (/* binding */ presetButtonColors),
/* harmony export */   "selectedClassName": () => (/* binding */ selectedClassName)
/* harmony export */ });
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/storage.service */ "./src/services/storage.service.js");


const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];
const selectedClassName = "current";

async function getAvailableColorButtons() {
    const {color }  = await _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.storageApi.get("color")

    return  presetButtonColors
        .map(buttonColor => ({color:buttonColor,className:buttonColor===color?selectedClassName:""}))
}


/***/ }),

/***/ "./src/services/dom.service.js":
/*!*************************************!*\
  !*** ./src/services/dom.service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClassTo": () => (/* binding */ addClassTo),
/* harmony export */   "getDataAttribute": () => (/* binding */ getDataAttribute),
/* harmony export */   "querySelectorOnParent": () => (/* binding */ querySelectorOnParent),
/* harmony export */   "removeClassFrom": () => (/* binding */ removeClassFrom),
/* harmony export */   "setBackgroundColorOfDocument": () => (/* binding */ setBackgroundColorOfDocument)
/* harmony export */ });
const setBackgroundColorOfDocument = (color)=>document.body.style.backgroundColor = color;

const querySelectorOnParent = (element, selector) =>  element.parentElement.querySelector(
    `${selector}`
);

const removeClassFrom = (element, className) => element.classList.remove(className);
const addClassTo = (element, className) => {
    if(!!className && element.classList.contains(className) === false)
        element.classList.add(className);
}

const getDataAttribute = (element, attributeName) => {
  return   element.getAttribute(`data-${attributeName}`);
}


/***/ }),

/***/ "./src/services/storage.service.js":
/*!*****************************************!*\
  !*** ./src/services/storage.service.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageApi": () => (/* binding */ storageApi)
/* harmony export */ });

const storageApi = {

    set:(obj)=>chrome.storage.sync.set(obj),
    get:async (key)=>{

        return new Promise((resolve,reject)=>{

            chrome.storage.sync.get(key, (data) => {
                console.log("retrieved data",data)
                resolve(data)
            });
        })
    }

}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/options/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usecases_optionPageBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usecases/optionPageBuilder */ "./src/options/usecases/optionPageBuilder.js");
/* harmony import */ var _usecases_changeDefaultColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usecases/changeDefaultColor */ "./src/options/usecases/changeDefaultColor.js");
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dom.service */ "./src/services/dom.service.js");





// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {

    (0,_usecases_changeDefaultColor__WEBPACK_IMPORTED_MODULE_1__.onColorChange)(event.target);
}

function createButton({color, className}) {
    console.log(color);
    console.log(className);
    let button = document.createElement("button");
    button.dataset.color = color;
    button.style.backgroundColor = color;
    (0,_services_dom_service__WEBPACK_IMPORTED_MODULE_2__.addClassTo)(button, className);
    button.addEventListener("click", handleButtonClick);
    return button;
}
// Add a button to the page for each supplied color
async function constructOptions() {

    let page = document.getElementById("buttonDiv");
    const buttons = await (0,_usecases_optionPageBuilder__WEBPACK_IMPORTED_MODULE_0__.getAvailableColorButtons)();

    console.log(buttons);
    buttons.map(createButton).forEach(button => page.appendChild(button));

}

// Initialize the page by constructing the color options
constructOptions().then(r => console.log(r));

})();

/******/ })()
;
//# sourceMappingURL=options.js.map