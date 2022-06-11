
export const getActiveTab = async ()=> chrome.tabs.query({ active: true, currentWindow: true })
export const getActiveTabID = async () => {
    let [tab] = await getActiveTab()
    return tab.id
}



export const executeScriptAtTabId = (tabId, filename)=>{
    chrome.scripting.executeScript({
        target: { tabId:tabId },
        files: [filename]
    });

}
export const executeScriptAtActiveTab = async (filename)=>{
    const tabId= await getActiveTabID()
    executeScriptAtTabId(tabId,filename)
}


