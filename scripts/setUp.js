const errorLength = document.getElementById("error-length");
const errorContent = document.getElementById("error-content");
const uiKeys = document.getElementsByClassName("key");
const aIndex = getAnswerIndex();
var keyboardUsed = new Object();
var letters = 5;
var guess = new String();
var keyboard = new Object();
var tries = 6;
var endingStr = "Wiccle Phase Springs Eternal %n/6\n";
var green = "correct";
var yellow = "wrongplace";
var black = "wrong";
//var vars = await getCookieVars();
//var tries = vars[0];
//var stats = vars[1];
//var theme = vars[2];
var theme = 1;
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
    }
    else {
        root.style.setProperty('--green', '#43945d');
        root.style.setProperty('--yellow', '#69308a');
        root.style.setProperty('--black', '#4a4a4a');
        root.style.setProperty('--background', '#003859');
        root.style.setProperty('--text', 'white');
        root.style.setProperty('--body', 'url(imgs/2.jpg)');
    }
}