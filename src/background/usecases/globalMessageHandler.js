import {storageApi} from "../../services/storage.service";


export async function onMessage(request, sender, sendResponse) {
    console.log('===> FROM THE BACKGROUND:', request);
    if (request.type === 'getColor') {
        const {color} = await storageApi.get('color')
        let response = {color};
        console.log("onMessage", response);
        sendResponse(response);

    }
}

