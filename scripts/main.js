function addLetter(letter) {
    let letterSquare = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = letter;
    guess += letter;
    letters--;
    letterSquare.classList.remove("border-secondary");
    letterSquare.classList.add("border-primary");
    letterSquare = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
}

function removeLetter() {
    if (letters < 5) letters++;
    let letterSquare = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = "⠀";
    guess = guess.slice(0, -1);
    letterSquare.classList.remove("border-primary");
    letterSquare.classList.add("border-secondary");
}

function updateColours(squares) {
    for (let i = 0; i < 5; i++) {
        square = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[i];
        square.style.backgroundColor = squares[i];
        square.classList.remove("border-primary");
        square.classList.add("border-invisible");
    }
    tries--;
    letters = 5;
}

document.onkeydown = async () => {
    var key = event.keyCode || event.charCode;
    if (key != 8 && key != 13 && (key < 65 || key > 90))
        return;
    let letter = String.fromCharCode(key);

    if (letters) {
        if (key == 13) {
            errorLength.classList.remove("display-none");
            errorLength.classList.add("display");
            await sleep(2000);
            errorLength.classList.add("display-none");
            errorLength.classList.remove("display");
            return;
        };
        if (key == 8)
            removeLetter();
        else
            addLetter(letter);
    }
    else if (key == 8) {
        removeLetter();
    }
    else if (key == 13 && tries) {
        if (!words.includes(guess)) {
            errorContent.classList.remove("display-none");
            errorContent.classList.add("display");
            await sleep(2000);
            errorContent.classList.add("display-none");
            errorContent.classList.remove("display");
            return;
        }
        console.log(guess, answer);
        squares = checkWord(guess, answer);
        guess = "";
        //if (!squares.includes(yellow) && !squares.includes(black)) victory();
        //else {
        updateColours(squares);
        //}
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}