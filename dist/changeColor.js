/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services/contentscript.service.js":
/*!***********************************************!*\
  !*** ./src/services/contentscript.service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessage": () => (/* binding */ sendMessage)
/* harmony export */ });


const sendMessage = (message) => {

    return new Promise((resolve, reject) => {

        chrome.runtime.sendMessage(message, (response) => {

            console.log('received user data', response);
            resolve(response);
        });

    })

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

/***/ "./src/services/injector.service.js":
/*!******************************************!*\
  !*** ./src/services/injector.service.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initContentScriptWith": () => (/* binding */ initContentScriptWith)
/* harmony export */ });
//Execute only when extension is set, When running tests,dont do anything
const initContentScriptWith = (fn, ... args) =>{

    if(typeof chrome !== "undefined") {
        fn(args)
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
/*!****************************************************!*\
  !*** ./src/contentscripts/usecases/changeColor.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPageColor": () => (/* binding */ setPageColor)
/* harmony export */ });
/* harmony import */ var _services_dom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/dom.service */ "./src/services/dom.service.js");
/* harmony import */ var _services_contentscript_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/contentscript.service */ "./src/services/contentscript.service.js");
/* harmony import */ var _services_injector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/injector.service */ "./src/services/injector.service.js");




function getColorFromBackgroundPage() {
    return (0,_services_contentscript_service__WEBPACK_IMPORTED_MODULE_1__.sendMessage)({type: "getColor"});
}

async function  setPageColor()  {

    const {color} = await getColorFromBackgroundPage()

    console.log("setting color to",color)
    ;(0,_services_dom_service__WEBPACK_IMPORTED_MODULE_0__.setBackgroundColorOfDocument)(color)

}

// The following is to start content script after injection
(0,_services_injector_service__WEBPACK_IMPORTED_MODULE_2__.initContentScriptWith)(setPageColor);

})();

/******/ })()
;
//# sourceMappingURL=changeColor.js.map