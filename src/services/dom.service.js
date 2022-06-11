export  const setBackgroundColorOfDocument = (color)=>document.body.style.backgroundColor = color;

export const querySelectorOnParent = (element, selector) =>  element.parentElement.querySelector(
    `${selector}`
);

export const removeClassFrom = (element, className) => element.classList.remove(className);
export const addClassTo = (element, className) => {
    if(!!className && element.classList.contains(className) === false)
        element.classList.add(className);
}

export const getDataAttribute = (element, attributeName) => {
  return   element.getAttribute(`data-${attributeName}`);
}
