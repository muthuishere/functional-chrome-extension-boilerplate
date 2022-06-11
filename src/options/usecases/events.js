import {storageApi} from "../../services/storage";

let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];


export function getSelectedClassName(){
    return selectedClassName;
}
// Reacts to a button click by marking the selected button and saving
// the selection
export function setColorAs(color) {

   storageApi.set({ color });

}

// Add a button to the page for each supplied color
export async function getButtons() {

    const {color } = await storageApi.get("color")
   return  presetButtonColors
            .map(buttonColor => ({color,className:buttonColor===color?selectedClassName:""}))



}

