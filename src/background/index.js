import {onInstalled} from "./usecases/onInstalled";




chrome.runtime.onInstalled.addListener(() => {
    onInstalled(chrome.storage.sync)
});


