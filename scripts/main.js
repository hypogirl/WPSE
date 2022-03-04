var letters = 5, tries = 6, guess = "", answer = "HELLO";

function addLetter(letter) {
    let letterSquare = document.getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = letter;
    guess += letter;
    letters--;
}

function removeLetter() {
    if (letters < 5) letters++;
    let letterSquare = document.getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = "";
    guess = guess.slice(0, -1);
}

function updateColours(squares) {
    for (let i = 0; i < 5; i++) {
        square = document.getElementsByClassName("row")[6-tries].getElementsByClassName("col")[i];
        square.style.backgroundColor = squares[i];
    }
}

document.onkeydown = function() {
    var key = event.keyCode || event.charCode;
    //backspace := 8
    console.log(key);
    if (key != 8 && key != 13 && (key < 65 || key > 90)) return;
    let letter = String.fromCharCode(key);
    
    if (letters) {
        if (key == 13) return;
        if (key == 8) removeLetter();
        else addLetter(letter);
    }
    else if (key == 8) removeLetter();
    else if (key == 13 && tries) {
        console.log(guess,answer);
        squares = checkWord(guess, answer);
        guess = "";
        //if (!squares.includes(yellow) && !squares.includes(black)) victory();
        //else {
            updateColours(squares);
            tries--;
            letters = 5;
        //}
    }
};