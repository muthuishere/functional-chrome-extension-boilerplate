import {onInstalled} from "./onInstalled";


test('onInstalled should set the default color to green', () => {
    let result=null
    const request ={
        set:({color})=>result=color
    }
    onInstalled(request)
    expect(result).toBe('#3aa757');
});