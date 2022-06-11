import {storageApi} from "../../services/storage.service";
import {getAvailableColorButtons, presetButtonColors, selectedClassName} from "./optionPageBuilder";
import {mockWhen} from "../../shared/mocks.test";

test("getAvailableColorButtons should retrieve list of colors",async () => {


    mockWhen(storageApi,"get").thenReturn( Promise.resolve({color:presetButtonColors[0]}));
    const buttons = await  getAvailableColorButtons()
    expect(buttons.length).toBe(4);

    const colors = buttons.map(button => button.color);
    expect(colors).toEqual(presetButtonColors);
    const classNames = buttons.map(button => button.className).filter(className => className===selectedClassName);
    expect(classNames.length).toBe(1);
    expect(classNames[0]).toBe(selectedClassName);

})
