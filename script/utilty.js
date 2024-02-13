function hideElement(elementName){
    const element = document.getElementById(elementName);
    element.classList.add('hidden');
}
function addElement(elementName){
    const element = document.getElementById(elementName);
    element.classList.remove('hidden');
}

// genarete letter 
function genareteLetter(){
    const letterString = 'abcdefghijklmnopqrstuvwxyz';
    const letters = letterString.split('');
    // genareteRondom numbers
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const letter = letters[index];
    return letter;
}

// setColor

function setBgColor(letterName){
    const letter = document.getElementById(letterName);
    letter.classList.add('bg-color');
}