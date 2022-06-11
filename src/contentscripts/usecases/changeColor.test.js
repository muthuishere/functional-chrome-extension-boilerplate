import {setBackgroundColorOfDocument} from "../../services/dom.service";
import * as contentScriptServices from "../../services/contentscript.service";
import {setPageColor} from "./changeColor";
import {mockWhen} from "../../shared/mocks.test";


test("setPageColor() should set the color of the document", async () => {

    mockWhen(contentScriptServices, "sendMessage").thenReturn(Promise.resolve({color:"red"}))

    await setPageColor()

    expect(setBackgroundColorOfDocument).toHaveBeenCalledWith("red")


})

