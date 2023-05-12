function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var triggered = false;

document.addEventListener('readystatechange', async function(ev) {
    await sleep(getRandomInt(1500, 2000));
    if (document.readyState === "complete" && triggered === false) {
        triggered = true;
        document.getElementById("loader").style.opacity = 0;
        await sleep(1000)
        document.getElementById("loader").style.zIndex = -99;
        return;
    }
});