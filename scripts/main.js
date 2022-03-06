async function flashBackground(squares, backgroundClasses) {
    for (square of squares) square.classList.add("white-background");
    await sleep(200);
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("bg-secondary");
        squares[i].classList.add(backgroundClasses[i]);
    }
    await sleep(200);
    for (square of squares) square.classList.remove("white-background");
}

async function addLetter(letter) {
    let letterSquare = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[5-letters];
    letterSquare.innerHTML = letter;
    guess += letter;
    letters--;
    letterSquare.classList.remove("border-secondary");
    letterSquare.classList.add("border-primary");
    await flashBackground([letterSquare],["bg-dark"]);
    letterSquare.classList.remove("bg-dark")
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

async function updateColours(colours) {
    let keyboardElements = new Array(), keyboardColours = new Array();
    for (let i = 0; i < 5; i++) {
        square = document.getElementById('rows').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[i];
        square.classList.add("border-invisible");
        square.classList.remove("border-secondary");
        if (!(colours.innerHTML in keyboardElements)) {
            keyboardElements.push(keyboard[square.innerHTML]);
            keyboardColours.push(colours[i]);
        }
        else if (keyboard[square.innerHTML] != green && ((keyboard[square.innerHTML] == yellow && colours[i] != black) || keyboard[square.innerHTML] == black)) {
            keyboardElements.push(keyboard[square.innerHTML]);
            keyboardColours.push(colours[i]);
        }
        await flashBackground([square], [colours[i]]);
    }
    await flashBackground(keyboardElements, keyboardColours);
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
        squares = checkWord(guess, words[aIndex]);
        guess = "";
        //if (!squares.includes(yellow) && !squares.includes(black)) victory();
        //else {
        updateColours(squares);
        //}
    }
}

document.onkeydown = async () => {
    var key = event.keyCode || event.charCode;
    if (key != 8 && key != 13 && (key < 65 || key > 90))
        return;
    await keyPressed(key);
};

async function uiKeyPressed() {
    if (this.innerHTML == "Enter") await keyPressed(13);
    else if (this.innerHTML == "⌫") await keyPressed(8);
    else await keyPressed(this.innerHTML.charCodeAt());
}

for (uiKey of uiKeys) {
    uiKey.addEventListener('click', uiKeyPressed, false);
    keyboard[uiKey.innerHTML] = uiKey;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}