import {color, onInstalled} from "./onInstalled";
import {setBackgroundColorOfDocument, storageApi} from "../../services/background";


test('onInstalled should set the default color on storageAPi', () => {
    onInstalled()
    expect(storageApi.set).toBeCalledWith({color})
});
