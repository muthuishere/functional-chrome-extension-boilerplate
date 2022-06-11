import {storageApi} from "../../services/storage";


export let color = '#3aa757';
export function onInstalled(){
    storageApi.set({ color });
    console.log("set Color")
}
