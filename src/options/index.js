import {getButtons, getSelectedClassName, setColorAs} from "./usecases/events";

let page = document.getElementById("buttonDiv");

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
    // Remove styling from the previously selected color
    const selectedClassName= getSelectedClassName()
    let eventTarget = event.target;

    let current = eventTarget.parentElement.querySelector(
        `.${selectedClassName}`
    );
    if (current && current !== eventTarget) {
        current.classList.remove(selectedClassName);
    }

    // Mark the button as selected
    let color = eventTarget.dataset.color;
    eventTarget.classList.add(selectedClassName);
    setColorAs(color);
}

// Add a button to the page for each supplied color
async function constructOptions() {

    const buttons = await getButtons();

    buttons.forEach(({color,className}) => {
        let button = document.createElement("button");
        button.dataset.color = color;
        button.style.backgroundColor = color;
        button.classList.add(className);
        button.addEventListener("click", handleButtonClick);
        page.appendChild(button);
    })

}

// Initialize the page by constructing the color options
constructOptions();
