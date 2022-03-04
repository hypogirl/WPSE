var letters = 5; var tries = 6;

function addLetter(letter) {
    let letterSquare = document.getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = letter;
    letters--;
}

function removeLetter() {
    if (letters < 5) letters++;
    let letterSquare = document.getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = "";
}

document.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    //backspace := 8
    console.log(key);
    if (key != 8 && (key < 65 || key > 90)) return;
    let letter = String.fromCharCode(key);

    if (letters) {
        if (key == 8) removeLetter();
        else addLetter(letter);
    }
    else if (tries) {
        if (key == 8) return
        //squares = checkWord(guess, answer);
        //if (!squares.includes(False) && !squares.includes(null)) victory();
        //else {
            //updateColours(squares);
            tries--;
            letters = 5;
            addLetter(letter);
        //}
    }
};