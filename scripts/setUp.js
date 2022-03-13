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
var stats = [], lostGame = false, cookieDate;
var cookieLetters, cookieColours;
var theme = 1;
var cookies = new Object();
// date, tries, stats, colours and letters
if (cookies["STATE"]) {
    const state = cookies["STATE"]
    if (state["TRIES"]) tries = state["TRIES"];
    if (state["1"]) stats = [state["1"],state["2"],state["3"],state["4"],state["5"],state["6"]];
    if (state["LOST"]) lostGame = Boolean(Number(state["LOST"]))
    if (state["DATE"]) cookieDate = Number(state["DATE"])
}
if (cookies["SECONDARY"]) {
    const secondary = cookies["SECONDARY"];
    if (secondary["LETTERS"]) cookieLetters = secondary["letters"].split('');
    if (secondary["COLOURS"]) cookieColours = secondary["letters"].split('');
}
if (cookies["THEME"]) theme = cookies["THEME"];

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