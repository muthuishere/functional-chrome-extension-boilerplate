/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/popup/index.js ***!
  \****************************/
console.log("hello popup")


//When Click is called
        // setBackgroundPageColor(getCurrentTab,executeScriptOnTab,)
document.getElementById("changeColor").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

//Everything is from chrome , how to make it functional
//Everything is from Events , how to make it functional

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = "red";
    });
}
/******/ })()
;
//# sourceMappingURL=options.js.map