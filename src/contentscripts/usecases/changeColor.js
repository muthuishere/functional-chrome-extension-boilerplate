import {setBackgroundColorOfDocument} from "../../services/dom.service";
import {sendMessage} from "../../services/contentscript.service";
import {initContentScriptWith} from "../../services/injector.service";

function getColorFromBackgroundPage() {
    return sendMessage({type: "getColor"});
}

export async function  setPageColor()  {

    const {color} = await getColorFromBackgroundPage()

    console.log("setting color to",color)
    setBackgroundColorOfDocument(color)

}

// The following is to start content script after injection
initContentScriptWith(setPageColor);
