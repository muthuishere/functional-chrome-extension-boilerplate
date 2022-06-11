

export const sendMessage = (message) => {

    return new Promise((resolve, reject) => {

        chrome.runtime.sendMessage(message, (response) => {

            console.log('received user data', response);
            resolve(response);
        });

    })

}

