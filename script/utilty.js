function hideElement(elementName) {
    const element = document.getElementById(elementName);
    element.classList.add('hidden');
}
function addElement(elementName) {
    const element = document.getElementById(elementName);
    element.classList.remove('hidden');
}

function setBgColor(letterName) {
    const letter = document.getElementById(letterName);
    letter.classList.add('bg-color');
}

function removeBgColor(letterName) {
    const letter = document.getElementById(letterName);
    letter.classList.remove('bg-color');
}

// genarete letter 
function genareteLetter() {
    const letterString = 'abcdefghijklmnopqrstuvwxyz';
    const letters = letterString.split('');
    // genareteRondom numbers
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const letter = letters[index];
    return letter;
}

// get item  text value

function getElementTextValue(element) {
    const elementById = document.getElementById(element);
    const elementText = elementById.innerText;
    const elementValue = parseInt(elementText);

    return elementValue;
}

// set item text value
function setElementTextValue(element, value) {
    const elementById = document.getElementById(element);
    elementById.innerText = value;
}

function getTextElementValue(element){
    const elementName = document.getElementById(element);
    const elementValue = elementName.innerText;
    return elementValue;
}
