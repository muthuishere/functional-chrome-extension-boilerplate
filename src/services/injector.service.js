export const initContentScriptWith = (fn, ... args) =>{
    if(typeof chrome !== "undefined") {
        fn(args)
    }
}
