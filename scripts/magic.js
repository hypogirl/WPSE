//
//  ---------------  don't cheat smh  ---------------
//

function getAnswer() {
    let words = ["DOVES"];
    let timezone = {timezone: "Europe/London"};
    let date = (new Date()).toLocaleString([], timezone).slice(0,-13).split("/");
    let reverseDate = date.reverse();
    finalDate = 0;
    reverseDate.forEach(number => finalDate += Number(number));
    return words[finalDate % words.length];
}

function getCookieVars() {}