import {getAvailableColorButtons} from "./usecases/optionPageBuilder";
import {onColorChange} from "./usecases/changeDefaultColor";
import {addClassTo} from "../services/dom.service";


// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {

    onColorChange(event.target);
}

function createButton({color, className}) {
    console.log(color);
    console.log(className);
    let button = document.createElement("button");
    button.dataset.color = color;
    button.style.backgroundColor = color;
    addClassTo(button, className);
    button.addEventListener("click", handleButtonClick);
    return button;
}
// Add a button to the page for each supplied color
async function constructOptions() {

    let page = document.getElementById("buttonDiv");
    const buttons = await getAvailableColorButtons();

    console.log(buttons);
    buttons.map(createButton).forEach(button => page.appendChild(button));

}

// Initialize the page by constructing the color options
constructOptions().then(r => console.log(r));
