async function whiteBackground(letterSquare) {
    letterSquare.classList.add("white-background");
    await sleep(200);
    letterSquare.classList.add("bg-dark");
    await sleep(200);
    letterSquare.classList.remove("white-background");
    letterSquare.classList.remove("bg-dark");
}

async function addLetter(letter) {
    let letterSquare = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = letter;
    guess += letter;
    letters--;
    letterSquare.classList.remove("border-secondary");
    letterSquare.classList.add("border-primary");
    await whiteBackground(letterSquare);
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

async function updateColours(squares) {
    for (let i = 0; i < 5; i++) {
        square = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[i];
        await whiteBackground(square);
        square.style.setProperty("background-color", squares[i], "important");
        square.classList.remove("border-primary");
        square.classList.add("border-invisible");
    }
    tries--;
    letters = 5;
}

async function showErrorMessage(error) {
    error.classList.remove("display-none");
    error.classList.add("display");
    await sleep(1500);
    error.classList.add("display-none");
    error.classList.remove("display");
}

document.onkeydown = async () => {
    var key = event.keyCode || event.charCode;
    if (key != 8 && key != 13 && (key < 65 || key > 90))
        return;
    let letter = String.fromCharCode(key);

    if (letters) {
        if (key == 13) {
            await showErrorMessage(errorLength);
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
        if (!words.includes(guess) && !english_words.includes(guess)) {
            await showErrorMessage(errorContent);
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