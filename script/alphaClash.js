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