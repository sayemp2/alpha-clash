function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;
    console.log(playerPressed)

    const currentPressedHandle = document.getElementById('letter');
    const currentPressed = currentPressedHandle.innerText;
    const expectedLetter = currentPressed.toLowerCase();

    if (playerPressed === expectedLetter) {

        const currentScore = getElementTextValue('currentScore');
        const updateScore = currentScore + 1;
        setElementTextValue('currentScore', updateScore);
        // addScore('currentScore');

        removeBgColor(expectedLetter);
        continueGame();
    }
    else {
        const currentLife = getElementTextValue('currentLife');
        const updateLife = currentLife - 1;
        setElementTextValue('currentLife', updateLife);
        if (updateLife === 0) {
            gameOver();
        }
    }

}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame() {
    const letter = genareteLetter();
    setElementTextValue('letter', letter);
    setBgColor(letter);
}

function playTheGame() {
    hideElement('home');
    addElement('play-ground');
    hideElement('final-score');
    setElementTextValue('currentLife', 5);
    setElementTextValue('currentScore', 0);
    continueGame();
}


function gameOver() {
    hideElement('play-ground');
    addElement('final-score');
    const lastAlphabet = getTextElementValue('letter');
    removeBgColor(lastAlphabet);
    const currentScore = getElementTextValue('currentScore');
    setElementTextValue('last-score',currentScore);
}