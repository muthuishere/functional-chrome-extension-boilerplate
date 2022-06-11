import {onInstalled} from "./usecases/onInstalled";
import {onMessage} from "./usecases/globalMessageHandler";


chrome.runtime.onInstalled.addListener(() => {
    onInstalled()
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        onMessage(request, sender, sendResponse);
        return true

    }
);
