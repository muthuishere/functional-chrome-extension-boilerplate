
export const storageApi = {

    set:(obj)=>chrome.storage.sync.set(obj),
    get:async (key)=>{

        return new Promise((resolve,reject)=>{

            chrome.storage.sync.get('key', (data) => {
                resolve(data)
            });
        })
    }

}
export const getActiveTab = async ()=> chrome.tabs.query({ active: true, currentWindow: true })
export const getActiveTabID = async () => {
    let [tab] = await getActiveTab()
    return tab.id
}

export const executeScriptAtTabId = (tabId,fn)=>{
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        function: fn,
    });
}
export const executeScriptAtActiveTab = async (fn)=>{

    const tabId= await getActiveTabID()
    executeScriptAtTabId(tabId,fn)
}

export  const setBackgroundColorOfDocument = (color)=>document.body.style.backgroundColor = color;