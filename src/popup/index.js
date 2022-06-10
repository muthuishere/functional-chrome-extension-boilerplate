import {setBackGroundColorBasedOnStorage} from "./usecases/setBackgroundColor";




//When Click is called


        // setBackgroundPageColor(getCurrentTab,executeScriptOnTab,)
document.getElementById("changeColor").addEventListener("click", () => {

    setBackGroundColorBasedOnStorage()


});

//Everything is from chrome , how to make it functional
//Everything is from Events , how to make it functional

// The body of this function will be executed as a content script inside the
// current page
