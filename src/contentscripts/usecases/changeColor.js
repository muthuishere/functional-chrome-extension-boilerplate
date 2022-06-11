import { storageApi} from "../../services/storage";
import {setBackgroundColorOfDocument} from "../../services/dom";

export async function  setColorForPage()  {

    const ar = await storageApi.get("color")
    console.log("set color for page",ar)
    setBackgroundColorOfDocument(ar.color)

}


setColorForPage()
