async function openSettings() {
    closeWindows("settings");
    const settingsDiv = document.getElementById("settings");
    const imgs = document.getElementsByClassName("backgroundImg");

    settingsDiv.classList.remove("display-none");
    settingsDiv.classList.add("display");
    await sleep(1);
    settingsDiv.classList.remove("display-small");
    settingsDiv.classList.add("display-big");
    await sleep(250);
    for (img of imgs) {
        img.classList.add("opacity-1");
        img.classList.remove("opacity-0");
    }
}

async function closeSettings() {
    const settingsDiv = document.getElementById("settings");
    const imgs = document.getElementsByClassName("backgroundImg");
    
    for (img of imgs) {
        img.classList.remove("opacity-1");
        img.classList.add("opacity-0");
    }
    await sleep(100);
    settingsDiv.classList.add("display-small");
    settingsDiv.classList.remove("display-big");
    await sleep(500);
    settingsDiv.classList.add("display-none");
    settingsDiv.classList.remove("display");
}

async function closeVictory() {
    const victoryDiv = document.getElementById("victory");
    const buttons = document.getElementsByClassName("share");

    for (button of buttons) {
        button.classList.remove("opacity-1");
        button.classList.add("opacity-0");
    }
    await sleep(100);
    victoryDiv.classList.add("display-small");
    victoryDiv.classList.remove("display-big");
    await sleep(500);
    victoryDiv.classList.add("display-none");
    victoryDiv.classList.remove("display");
}

async function copyEnding() {
    const clipboard = document.getElementById("clipboard");
    navigator.clipboard.writeText(endingStr);
    clipboard.innerHTML = "Copied<i class=\"bi bi-clipboard-check ms-2\"></i>"
    await sleep(3000);
    clipboard.innerHTML = "Copy to clipboard<i class=\"bi bi-clipboard ms-2\"></i>"
}

function openTwitter() {
    const url = "https://twitter.com/intent/tweet?text=" + endingStr.replaceAll("\n","%0D%0A");
    window.open(url)
}