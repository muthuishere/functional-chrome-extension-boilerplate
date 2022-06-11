
export const storageApi = {

    set:(obj)=>chrome.storage.sync.set(obj),
    get:async (key)=>{

        return new Promise((resolve,reject)=>{

            chrome.storage.sync.get('key', (data) => {
                console.log("retrieved data",data)
                resolve(data)
            });
        })
    }

}
