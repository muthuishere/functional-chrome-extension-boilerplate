import {executeScriptAtActiveTab} from "../../services/background";
import {getChangeColor} from "../../shared/constants";

console.log("set background color")
export async function setBackGroundColorBasedOnStorage() {

    await executeScriptAtActiveTab(getChangeColor())

}

