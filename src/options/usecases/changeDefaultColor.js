import {storageApi} from "../../services/storage.service";
import {addClassTo, getDataAttribute, querySelectorOnParent, removeClassFrom} from "../../services/dom.service";
import {selectedClassName} from "./optionPageBuilder";


export function onColorChange(selectedButton) {

    let classSelector = "." + selectedClassName;
    const previousSelectedButton = querySelectorOnParent(selectedButton, classSelector);


    if (previousSelectedButton && previousSelectedButton !== selectedButton) {
        removeClassFrom(previousSelectedButton, selectedClassName);
    }


    let color = getDataAttribute(selectedButton,"color") ;
    addClassTo(selectedButton, selectedClassName);

    storageApi.set({ color });

}
