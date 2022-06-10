import {storageApi} from "../../shared/services";

console.log("hi")
export let color = '#3aa757';
export function onInstalled(){
    storageApi.set({ color });
}
