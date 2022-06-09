
export let color = '#3aa757';
export function onInstalled(storageApi){
    storageApi.set({ color });
}