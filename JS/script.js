const startingTime = 5;
let totalTime = startingTime * 60;
let countdown = document.getElementById("time");

const timer = setInterval(function () {
  minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;

  if (seconds < 0) {
    clearInterval(timer);
    alert("Tiden är ute!");
  } else if (seconds === 0) {
    countdown.innerHTML = "0" + minutes + ":" + seconds + "0";
  } else if (seconds < 10) {
    countdown.innerHTML = "0" + minutes + ":" + "0" + seconds;
  } else {
    countdown.innerHTML = "0" + minutes + ":" + seconds;
  }

  totalTime--;
}, 1000);
console.log(totalTime);
