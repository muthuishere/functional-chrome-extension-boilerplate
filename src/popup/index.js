import {setBackGroundColorBasedOnStorage} from "./usecases/setBackgroundColor";


document.getElementById("changeColor").addEventListener("click", () => {

    setBackGroundColorBasedOnStorage()
});
