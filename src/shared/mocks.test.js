

/*

import {setBackGroundColorBasedOnStorage, setColorForPage} from "./setBackgroundColor";

// All these files are mocked in
 */

test("mocking should work", async () => {
    const user ={
        greet:()=>"hello"
    }
    mockWhen(user,"greet").thenReturn("hai")
    const result = user.greet()
    expect(result).toBe("hai")
})
export function mockWhen(fn,methodnameInBrackets) {
    let spiedFunction;
    return {
        thenReturn: (result) => {
            spiedFunction = jest.spyOn(fn, methodnameInBrackets);
            spiedFunction.mockImplementation(() => result);
            return spiedFunction;
        },
        restore:()=>{
            spiedFunction.mockRestore();
        }
    }

}
