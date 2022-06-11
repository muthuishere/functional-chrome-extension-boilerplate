import {storageApi} from "../../services/storage.service";
import * as domService from "../../services/dom.service";
import {selectedClassName} from "./optionPageBuilder";
import {mockWhen} from "../../shared/mocks.test";
import {onColorChange} from "./changeDefaultColor";


test("onColorChange for different button should change class and update storage",async () => {


    mockWhen(domService,"querySelectorOnParent").thenReturn(null);

    mockWhen(domService,"getDataAttribute").thenReturn("#3aa757");
    const selectedButton = {name:"btnred"};
    onColorChange(selectedButton);

    expect(domService.removeClassFrom).not.toBeCalled();
    expect(domService.addClassTo).toBeCalledWith(selectedButton, selectedClassName);
    expect(storageApi.set).toBeCalledWith({"color": "#3aa757"});

})

test("onColorChange for same button should remove class for previous value and update storage",async () => {

    const selectedButton = {name:"btnred"};
    const lastSelectedButton = {name:"btnblue"};
    mockWhen(domService,"querySelectorOnParent").thenReturn(lastSelectedButton);
    mockWhen(domService,"getDataAttribute").thenReturn("#3aa757");

    onColorChange(selectedButton);

    expect(domService.removeClassFrom).toBeCalled();
    expect(domService.addClassTo).toBeCalledWith(selectedButton, selectedClassName);
    expect(storageApi.set).toBeCalledWith({"color": "#3aa757"});

})
