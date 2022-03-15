const errorLength = document.getElementById("error-length");
const errorContent = document.getElementById("error-content");
const uiKeys = document.getElementsByClassName("key");
const aIndex = getAnswerIndex();

var letters = 5;
var tries = 6;

var keyboardUsed = new Object();
var guess = new String();
var keyboard = new Object();

var endingStr = "Wiccle Phase Springs Eternal %n/6\n";
var green = "correct";
var yellow = "wrongplace";
var black = "wrong";

var priority = new Object();
priority[green] = 2;
priority[yellow] = 1;
priority[black] = 0;

var blockGame = false;
var stats = [0,0,0,0,0,0], lostGame = false, cookieDate = getFinalDate();
var cookieLetters, cookieColours = new String();
var guessesStr = new String(), prioritiesStr = new String();
var theme = 1;

var cookies = new Object();

window.onload = async () => {
    cookies = await getCookies();
    if (cookies.STATE) {
        cookies.STATE.name = "STATE=";
        const state = cookies.STATE;
        if (state.THEME) {theme = state.THEME; updateTheme(theme,true);}
        if (state[1]) stats = [state[1],state[2],state[3],state[4],state[5],state[6]];
    }
    if (cookies.SECONDARY && cookies.SECONDARY.DATE == getFinalDate()) {
        cookies.SECONDARY.name = "SECONDARY=";
        const secondary = cookies.SECONDARY;
        if (secondary.DATE) cookieDate = secondary.DATE;
        if (secondary.LETTERS) cookieLetters = secondary.LETTERS;
        if (secondary.COLOURS) for (let i = 0; i < secondary.COLOURS.length; i++)
            cookieColours[i] = getKey(priority,secondary.COLOURS);
        if (secondary.LOST) lostGame = Boolean(Number(secondary.LOST));
        for (i=0;i < cookieLetters.length; i+=5) {
            await initUpdateColours(cookieLetters.substring(i,i+5),cookieColours.substring(i,i+5));
        }
    }

    function getKey(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
      

    if (lostGame) {
        openStats();
        blockGame = true;
    }
    else if (!tries) {
        victory(words[getAnswerIndex()]);
        blockGame = true;
    }
}

function updateTheme(newTheme, init=null) {
    if (!init) {
        theme = cookies.STATE.THEME = newTheme;
        setCookies(cookies.STATE);
    }

    const root = document.querySelector(':root');
    if (newTheme == 1) {
        root.style.setProperty('--green', '#3a753f');
        root.style.setProperty('--yellow', '#75653a');
        root.style.setProperty('--black', '#343434');
        root.style.setProperty('--background', '#181818');
        root.style.setProperty('--text', 'black');
        root.style.setProperty('--body', 'url(imgs/1.jpg)');
        root.style.setProperty('--button', '#212529');
    }
    else {
        root.style.setProperty('--green', '#43945d');
        root.style.setProperty('--yellow', '#69308a');
        root.style.setProperty('--black', '#4a4a4a');
        root.style.setProperty('--background', '#003859');
        root.style.setProperty('--text', 'white');
        root.style.setProperty('--body', 'url(imgs/2.jpg)');
        root.style.setProperty('--button', '#21252900');
    }
}

async function initUpdateColours(letters, colours) {
    for (let i = 0; i < 5; i++) {
        square = document.getElementById('guesses').getElementsByClassName("row")[6-tries].getElementsByClassName("col")[i];
        square.classList.add("border-invisible");
        square.classList.remove("border-secondary");
        if (!(letters[i] in keyboardUsed))
            keyboardUsed[letters[i]] = colours[i];
        else if (priority[colours[i]] > priority[keyboardUsed[letters[i]]])
            keyboardUsed[letters[i]] = colours[i];

        square.innerHTML = letters[i];
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