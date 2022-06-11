import {executeScriptAtActiveTab} from "../../services/background.service";
import {getChangeColor} from "../../shared/constants";

console.log("set background color")
export async function setBackGroundColorBasedOnStorage() {

    await executeScriptAtActiveTab(getChangeColor())

}

