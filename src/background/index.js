import {onInstalled} from "./usecases/onInstalled";
import {storageApi} from "../shared/elements";




chrome.runtime.onInstalled.addListener(() => {
    onInstalled(storageApi)
});


