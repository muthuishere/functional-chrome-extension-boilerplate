import {executeScriptAtActiveTab, setBackgroundColorOfDocument, storageApi} from "../../services/background.service";
import {setBackGroundColorBasedOnStorage, setColorForPage} from "./setBackgroundColor";
import {mockWhen} from "../../shared/mocks.test";


test("setBackGroundColorBasedOnStorageShouldCallexecuteScriptAtActiveTab", async () => {

    await setBackGroundColorBasedOnStorage()
    expect(executeScriptAtActiveTab).toHaveBeenCalled()


})

test("setColor should call setBackgroundColorOfDocument with existing color in storage", async () => {


    const colorToBeSet='red'
    mockWhen(storageApi,"get").thenReturn( Promise.resolve({"color":colorToBeSet}))
    await setColorForPage()
    expect(setBackgroundColorOfDocument).toBeCalledWith(colorToBeSet)


})

