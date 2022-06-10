import {color, onInstalled} from "./onInstalled";
import {setBackgroundColorOfDocument, storageApi} from "../../shared/services";


test('onInstalled should set the default color on storageAPi', () => {
    onInstalled()
    expect(storageApi.set).toBeCalledWith({color})
});
