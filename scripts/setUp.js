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
var cookieLetters, cookieColours;
var theme = 1;
var cookies = new Object();

if (cookies.STATE) {
    cookies.STATE.name = "STATE=";
    const state = cookies.STATE;
    if (state.THEME) theme = state.THEME;
    if (state[1]) stats = [state[1],state[2],state[3],state[4],state[5],state[6]];
    
}
if (cookies.SECONDARY && cookies.SECONDARY.DATE == getFinalDate()) {
    cookies.SECONDARY.name = "SECONDARY=";
    const secondary = cookies.SECONDARY;
    if (secondary.DATE) cookieDate = secondary.DATE;
    if (secondary.TRIES) tries = secondary.TRIES;
    if (secondary.LETTERS) cookieLetters = secondary.LETTERS.split('');
    if (secondary.COLOURS) cookieColours = secondary.COLOURS.split('');
    if (secondary.LOST) lostGame = Boolean(Number(secondary.LOST));
}

if (lostGame) {
    openStats();
    blockGame = true;
}
else if (!tries) {
    victory(words[getAnswerIndex()]);
    blockGame = true;
}

updateTheme(theme);

function updateTheme(theme) {
    const root = document.querySelector(':root');
    if (theme == 1) {
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