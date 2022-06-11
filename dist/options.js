/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/usecases/setBackgroundColor.js":
/*!**************************************************!*\
  !*** ./src/popup/usecases/setBackgroundColor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBackGroundColorBasedOnStorage": () => (/* binding */ setBackGroundColorBasedOnStorage)
/* harmony export */ });
/* harmony import */ var _services_backgroundservices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/backgroundservices */ "./src/services/backgroundservices.js");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/constants */ "./src/shared/constants.js");



console.log("set background color")
async function setBackGroundColorBasedOnStorage() {

    await (0,_services_backgroundservices__WEBPACK_IMPORTED_MODULE_0__.executeScriptAtActiveTab)((0,_shared_constants__WEBPACK_IMPORTED_MODULE_1__.getChangeColor)())

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




/***/ }),

/***/ "./src/shared/constants.js":
/*!*********************************!*\
  !*** ./src/shared/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChangeColor": () => (/* binding */ getChangeColor)
/* harmony export */ });
function getChangeColor(){
    return "changeColor.js"
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
/*!****************************!*\
  !*** ./src/popup/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usecases_setBackgroundColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usecases/setBackgroundColor */ "./src/popup/usecases/setBackgroundColor.js");





//When Click is called


        // setBackgroundPageColor(getCurrentTab,executeScriptOnTab,)
document.getElementById("changeColor").addEventListener("click", () => {

    (0,_usecases_setBackgroundColor__WEBPACK_IMPORTED_MODULE_0__.setBackGroundColorBasedOnStorage)()


});

//Everything is from chrome , how to make it functional
//Everything is from Events , how to make it functional

// The body of this function will be executed as a content script inside the
// current page

})();

/******/ })()
;
//# sourceMappingURL=options.js.map