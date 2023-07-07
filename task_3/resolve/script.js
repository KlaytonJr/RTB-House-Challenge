const banner = document.getElementById("banner");

// Brand Logo
const logo = document.getElementById("brand-logo");
logo.src = "https://rekrutacja.webdeveloper.rtbhouse.net/files/logo_rtb.png"

// Countdown
const clockEl = document.querySelector(".clock");

const expected = "8 Jul 2023 22:20";

function countdown() {
    const expectedDate = new Date(expected);
    const currentDate = new Date();

    const totalSeconds = (expectedDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(days < 1 && hours < 1) {
        clockEl.innerHTML = `${formatTime(mins)}-${formatTime(seconds)}`;
    } else if (days < 1) {
        clockEl.innerHTML = `${formatTime(hours)}-${formatTime(mins)}-${formatTime(seconds)}`
    } else {
        clockEl.innerHTML = `${days}-${formatTime(hours)}-${formatTime(mins)}-${formatTime(seconds)}`
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(() => {
    countdown();
}, 1000);