let root = document.documentElement;

const innerCircle = document.querySelector(".inner-circle");
let mode = "dark";

const watchBody = document.querySelector(".watch-body");

const secondHand = document.querySelector(".clock-arrow--seconds");
const minuteHand = document.querySelector(".clock-arrow--minutes");
const hourHand = document.querySelector(".clock-arrow--hours");

const secondsVisiblePart = document.querySelector(".seconds-visible-part");

function secondHandWidth(sec, secHand) {
  if (sec === 0 || sec === 15 || sec === 30 || sec === 45) {
    secHand.style.width = "35px";
  } else {
    secHand.style.width = "20px";
  }
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + 90;
  secondHandWidth(seconds, secondsVisiblePart);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = minutes * 6 + 90 + seconds * 0.1;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hoursDegrees = hour * 30 + 90 + minutes * 0.5;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setTimeout(() => (watchBody.style.opacity = "1"), 1000);

innerCircle.addEventListener("click", () => {
  if (mode === "dark") {
    innerCircle.style.backgroundImage = "url(darkMode.png)";
    root.style.setProperty("--container-color", "#fa1e0e");
    root.style.setProperty("--color-primary", "white");
    root.style.setProperty("--watch-shadow", "0 0 5px white");
    root.style.setProperty("--arrow-color", "#ffbe0f");
    mode = "light";
  } else {
    innerCircle.style.backgroundImage = "url(lightMode.png)";
    root.style.setProperty("--container-color", "#3b444b");
    root.style.setProperty("--color-primary", "black");
    root.style.setProperty("--watch-shadow", "0 0 5px white");
    root.style.setProperty("--arrow-color", "white");
    mode = "dark";
  }
});
