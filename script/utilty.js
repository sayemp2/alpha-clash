function hideElement(elementName){
    const element = document.getElementById(elementName);
    element.classList.add('hidden');
}
function addElement(elementName){
    const element = document.getElementById(elementName);
    element.classList.remove('hidden');
}

function setBgColor(letterName){
    const letter = document.getElementById(letterName);
    letter.classList.add('bg-color');
}

function removeBgColor(letterName){
    const letter = document.getElementById(letterName);
    letter.classList.remove('bg-color');
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

// reduceLife

function addScore(Score){
    const CurrentScoreElement = document.getElementById(Score);
        const CurrentScoreText = CurrentScoreElement.innerText;
        const currentScore = parseInt(CurrentScoreText);
        const newScore = currentScore + 1;
        CurrentScoreElement.innerText = newScore
}

function reduceLife(life){
    const CurrentLifeElement = document.getElementById(life);
        const CurrentLifeText = CurrentLifeElement.innerText;
        const currentLife = parseInt(CurrentLifeText);
        const newLife = currentLife - 1;
        CurrentLifeElement.innerText = newLife;
}
