/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background/usecases/onInstalled.js":
/*!************************************************!*\
  !*** ./src/background/usecases/onInstalled.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "onInstalled": () => (/* binding */ onInstalled)
/* harmony export */ });
/* harmony import */ var _services_backgroundservices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/backgroundservices */ "./src/services/backgroundservices.js");



let color = '#3aa757';
function onInstalled(){
    _services_backgroundservices__WEBPACK_IMPORTED_MODULE_0__.storageApi.set({ color });
    console.log("set Color")
}


/***/ }),

/***/ "./src/services/backgroundservices.js":
/*!********************************************!*\
  !*** ./src/services/backgroundservices.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeScriptAtActiveTab": () => (/* binding */ executeScriptAtActiveTab),
/* harmony export */   "executeScriptAtTabId": () => (/* binding */ executeScriptAtTabId),
/* harmony export */   "getActiveTab": () => (/* binding */ getActiveTab),
/* harmony export */   "getActiveTabID": () => (/* binding */ getActiveTabID)
/* harmony export */ });

const getActiveTab = async ()=> chrome.tabs.query({ active: true, currentWindow: true })
const getActiveTabID = async () => {
    let [tab] = await getActiveTab()
    return tab.id
}



const executeScriptAtTabId = (tabId, filename)=>{
    chrome.scripting.executeScript({
        target: { tabId:tabId },
        files: [filename]
    });

}
const executeScriptAtActiveTab = async (filename)=>{
    const tabId= await getActiveTabID()
    executeScriptAtTabId(tabId,filename)
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
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usecases_onInstalled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usecases/onInstalled */ "./src/background/usecases/onInstalled.js");
/* harmony import */ var _services_backgroundservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/backgroundservices */ "./src/services/backgroundservices.js");






chrome.runtime.onInstalled.addListener(() => {
    (0,_usecases_onInstalled__WEBPACK_IMPORTED_MODULE_0__.onInstalled)(_services_backgroundservices__WEBPACK_IMPORTED_MODULE_1__.storageApi)
});



})();

/******/ })()
;
//# sourceMappingURL=background.js.map