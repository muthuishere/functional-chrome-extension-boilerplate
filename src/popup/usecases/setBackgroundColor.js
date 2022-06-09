import {executeScriptAtActiveTab, storageApi} from "../../shared/elements";

function setBackGroundColorBasedOnStorage(){

}

function setPageBackgroundColor({
                                    executeScriptAtActiveTab,
                                    storageApi,
                                    setBackgroundColorOfDocument
                                }) {

    executeScriptAtActiveTab(setColor({storageApi,setBackgroundColorOfDocument}))

}

async function  setColor({storageApi,setBackgroundColorOfDocument})  {
    const {color} = await storageApi.get("color")
    setBackgroundColorOfDocument("blue")
}