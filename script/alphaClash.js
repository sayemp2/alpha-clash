function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key; 
    console.log(playerPressed)

    const currentPressedHandle = document.getElementById('letter');
    const  currentPressed = currentPressedHandle.innerText;
    const expectedLetter = currentPressed.toLowerCase();
    if (playerPressed === expectedLetter){
        // const CurrentScoreElement = document.getElementById('currentScore');
        // const CurrentScoreText = CurrentScoreElement.innerText;
        // const currentScore = parseInt(CurrentScoreText);
        // const newScore = currentScore + 1;
        // CurrentScoreElement.innerText = newScore
        addScore('currentScore');
        
        removeBgColor(expectedLetter);
        continueGame();
     }
    else{
        // const CurrentLifeElement = document.getElementById('currentLife');
        // const CurrentLifeText = CurrentLifeElement.innerText;
        // const currentLife = parseInt(CurrentLifeText);
        // const newLife = currentLife - 1;
        // CurrentLifeElement.innerText = newLife;
        reduceLife('currentLife');
    }

}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame(){
      const letter = genareteLetter();
      const currentLetter = document.getElementById('letter');
      currentLetter.innerText = letter;
      setBgColor(letter);
}

function playTheGame(){
    hideElement('home');
    addElement('play-ground');
    continueGame();
}