/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/background/index.js ***!
  \*********************************/
console.log("hello bd dddg")

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});
/******/ })()
;
//# sourceMappingURL=background.js.map