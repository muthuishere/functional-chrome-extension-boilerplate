import {onInstalled} from "./usecases/onInstalled";
import {storageApi} from "../shared/services";




chrome.runtime.onInstalled.addListener(() => {
    onInstalled(storageApi)
});


