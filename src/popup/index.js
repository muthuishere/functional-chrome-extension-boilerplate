import {executeScriptAtActiveTab, getActiveTab, storageApi} from "../shared/elements";

console.log("hello popup")


//When Click is called


        // setBackgroundPageColor(getCurrentTab,executeScriptOnTab,)
document.getElementById("changeColor").addEventListener("click", async () => {

    await setBackGroundColorBasedOnStorage({
        executeScriptAtActiveTab,
        storageApi
    })


});

//Everything is from chrome , how to make it functional
//Everything is from Events , how to make it functional

// The body of this function will be executed as a content script inside the
// current page
