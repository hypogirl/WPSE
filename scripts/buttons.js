async function openSettings() {
    closeWindows("settings");
    const settingsDiv = document.getElementById("settings");
    const imgs = document.getElementsByClassName("backgroundImg");

    settingsDiv.classList.remove("display-none");
    settingsDiv.classList.add("display");
    await sleep(1);
    settingsDiv.classList.remove("display-small-settings");
    settingsDiv.classList.add("display-big-settings");
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
    settingsDiv.classList.add("display-small-settings");
    settingsDiv.classList.remove("display-big-settings");
    await sleep(500);
    settingsDiv.classList.add("display-none");
    settingsDiv.classList.remove("display");
}

async function openStats() {
    closeWindows("stats");
    updateStatsBars("stats-bar");
    const statsDiv = document.getElementById("stats");
    const button = document.getElementById("clipboardStats");
    
    statsDiv.classList.remove("display-none");
    statsDiv.classList.add("display");
    await sleep(1);
    statsDiv.classList.remove("display-small-stats");
    statsDiv.classList.add("display-big-stats");
    await sleep(250);
    button.classList.add("opacity-1");
    button.classList.remove("opacity-0");
}

async function closeStats() {
    const statsDiv = document.getElementById("stats");
    statsDiv.classList.add("display-small-stats");
    statsDiv.classList.remove("display-big-stats");
    await sleep(500);
    statsDiv.classList.add("display-none");
    statsDiv.classList.remove("display");
}

async function closeVictory() {
    const victoryDiv = document.getElementById("victory");
    const buttons = document.getElementsByClassName("share");

    for (button of buttons) {
        button.classList.remove("opacity-1");
        button.classList.add("opacity-0");
    }
    await sleep(100);
    victoryDiv.classList.add("display-small-victory");
    victoryDiv.classList.remove("display-big-victory");
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

async function copyStats(){
    const clipboard = document.getElementById("clipboardStats");

    statsStr = "Wiccle Phase Springs Eternal stats:\n"
    const max = Math.max(...stats);
    if (!max) {
        clipboard.innerHTML = "Win at least once to copy your stats."
        await sleep(3000);
        clipboard.innerHTML = "Copy to clipboard<i class=\"bi bi-clipboard ms-2\"></i>"
        return;
    }
    for (let i = 0; i < 6; i++) statsStr += "\n" + String(i+1) + " " + "█".repeat(Math.floor((stats[i]/max)*10));

    navigator.clipboard.writeText(statsStr);
    clipboard.innerHTML = "Copied<i class=\"bi bi-clipboard-check ms-2\"></i>"
    await sleep(3000);
    clipboard.innerHTML = "Copy to clipboard<i class=\"bi bi-clipboard ms-2\"></i>"
}