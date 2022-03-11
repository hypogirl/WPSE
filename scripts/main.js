async function flashBackground(squares, backgroundClasses) {
    for (square of squares) square.classList.add("white-background");
    await sleep(200);
    if (backgroundClasses) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].classList.add(backgroundClasses[i]);
            squares[i].classList.remove("bg-secondary");
        }
        await sleep(200);
    }
    for (square of squares) square.classList.remove("white-background");
}

async function addLetter(letter) {
    let letterSquare = document.getElementById('guesses').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = letter;
    guess += letter;
    letters--;
    letterSquare.classList.remove("border-secondary");
    letterSquare.classList.add("border-primary");
    await flashBackground([letterSquare],null);
    letterSquare.classList.remove("bg-dark")
    letterSquare = document.getElementById('guesses').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
}

function removeLetter() {
    if (letters < 5) letters++;
    let letterSquare = document.getElementById('guesses').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = "⠀";
    guess = guess.slice(0, -1);
    letterSquare.classList.remove("border-primary");
    letterSquare.classList.add("border-secondary");
}

async function updateColours(colours) {
    for (let i = 0; i < 5; i++) {
        square = document.getElementById('guesses').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[i];
        square.classList.add("border-invisible");
        square.classList.remove("border-secondary");
        if (!(square.innerHTML in keyboardUsed))
            keyboardUsed[square.innerHTML] = colours[i];
        else if (colours[i] != black && keyboardUsed[square.innerHTML] != green && (colours[i] == green || keyboardUsed[square.innerHTML] == black))
            keyboardUsed[square.innerHTML] = colours[i];
        await flashBackground([square], [colours[i]]);
    }
    let keyboardElements = new Array();
    let keyboardColours = new Array();
    for ([letter, colour] of Object.entries(keyboardUsed)) {
        keyboardElements.push(document.getElementById(letter));
        keyboardColours.push(colour);
    }
    await flashBackground(keyboardElements, keyboardColours);
    tries--;
    letters = 5;
}

async function showErrorMessage(error) {
    error.classList.remove("opacity-0");
    error.classList.add("opacity-1");
    await sleep(1500);
    error.classList.add("opacity-0");
    error.classList.remove("opacity-1");
}

async function victory(guessSave) {
    victoryDiv = document.getElementById("victory");
    victoryDiv.innerHTML = victoryDiv.innerHTML.replace("%word", guessSave.toLowerCase())
    const buttons = document.getElementsByClassName("share");

    victoryDiv.classList.remove("display-none");
    await sleep(1)
    victoryDiv.classList.remove("display-small");
    victoryDiv.classList.add("display-big");
    await sleep(250);
    for (button of buttons) {
        button.classList.add("opacity-1");
        button.classList.remove("opacity-0");
    }
}

function updateEndingStr(squares) {
    const greenSquare = "🟩";
    let yellowSquare;
    if (theme == "1") yellowSquare = "🟨";
    else yellowSquare = "🟪";
    const blackSquare = "⬛";

    endingStr += String(6 - tries) + "/6\n\n";
    for (square of squares) {
        if (square == green) endingStr += greenSquare;
        else if (square == yellow) endingStr += yellowSquare;
        else if (square == black) endingStr += blackSquare;
    }
}

async function keyPressed(key) {
    let letter = String.fromCharCode(key);
    if (letters) {
        if (key == 13) {
            await showErrorMessage(errorLength);
            return;
        };
        if (key == 8)
            removeLetter();
        else addLetter(letter);
    }
    else if (key == 8) {
        removeLetter();
    }
    else if (key == 13 && tries) {
        if (!words.includes(guess) && !english_words.includes(guess)) {
            await showErrorMessage(errorContent);
            return;
        }
        const squares = checkWord(guess, words[aIndex]);
        const guessSave = guess;
        guess = "";
        updateColours(squares);
        updateEndingStr(squares);
        await sleep(3000);
        if (!squares.includes(yellow) && !squares.includes(black)) victory(guessSave);
    }
}

document.onkeydown = async () => {
    var key = event.keyCode || event.charCode;
    if (key != 8 && key != 13 && (key < 65 || key > 90))
        return;
    await keyPressed(key);
};

async function uiKeyPressed() {
    if (this.id == "enter") await keyPressed(13);
    else if (this.id == "backspace") await keyPressed(8);
    else await keyPressed(this.innerHTML.charCodeAt());
}

for (uiKey of uiKeys) {
    uiKey.addEventListener('click', uiKeyPressed, false);
    keyboard[uiKey.innerHTML] = uiKey;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}