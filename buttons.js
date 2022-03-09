async function openSettings() {
    const settingsDiv = document.getElementById("settings");
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const imgs = [img1,img2];

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
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const imgs = [img1,img2];
    
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