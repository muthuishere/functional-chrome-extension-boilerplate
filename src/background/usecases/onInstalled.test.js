import {color, onInstalled} from "./onInstalled";
import {storageApi} from "../../services/background.service";


test('onInstalled should set the default color on storageAPi', () => {
    onInstalled()
    expect(storageApi.set).toBeCalledWith({color})
});
