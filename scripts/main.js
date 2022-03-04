var letters = 5; var tries = 6;

document.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    //backspace := 8

    if (key != 8 && key < 65 && key > 90) return
    let letter = String.fromCharCode(key);

    if (letters) {
        if (key == 8) {
            removeLetter();
            letters++;
        }
        else {
            addLetter(letter);
            letters--;
        }
    }
    else if (tries) {
        squares = checkWord(guess, answer);
        if (!squares.includes(False) && !squares.includes(null)) victory();
        else {
            updateColours(squares);
            tries--;
            letters = 5;
            addLetter(letter);
            letters--;
        }
    }
};