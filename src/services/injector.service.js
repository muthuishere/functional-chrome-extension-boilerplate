//Execute only when extension is set, When running tests,dont do anything
export const initContentScriptWith = (fn, ... args) =>{

    if(typeof chrome !== "undefined") {
        fn(args)
    }
}
