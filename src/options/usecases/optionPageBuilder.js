import {storageApi} from "../../services/storage.service";

export const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];
export const selectedClassName = "current";

export async function getAvailableColorButtons() {
    const {color }  = await storageApi.get("color")

    return  presetButtonColors
        .map(buttonColor => ({color:buttonColor,className:buttonColor===color?selectedClassName:""}))
}
