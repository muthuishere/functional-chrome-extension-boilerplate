import {executeScriptAtActiveTab, storageApi,setBackgroundColorOfDocument} from "../../shared/services";

console.log("set background color")
export async function setBackGroundColorBasedOnStorage() {

    await executeScriptAtActiveTab(setColorForPage)

}

export async function  setColorForPage()  {
    const {color} = await storageApi.get("color")
    setBackgroundColorOfDocument(color)
    console.log("set setColorForPage color")
}
