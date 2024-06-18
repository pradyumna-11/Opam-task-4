let startButtonEl = document.getElementById("startButton");
let stopButtonEl = document.getElementById("stopButton");
let resetButtonEl = document.getElementById("resetButton");
let timerEl = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerIntervalId;

let secondsText;
let minutesText;
let hoursText;

startButtonEl.onclick = () => {
  timerIntervalId = setInterval(() => {
    seconds += 1;
    minutes = parseInt(seconds / 60);
    hours = parseInt(minutes / 60);

    secondsText =
      seconds % 60 < 10
        ? "0" + (seconds % 60).toString()
        : (seconds % 60).toString();
    minutesText =
      minutes % 60 < 10
        ? "0" + (minutes % 60).toString()
        : (minutes % 60).toString();
    hoursText = hours < 10 ? "0" + hours.toString() : hours.toString();
    let time = `${hoursText}:${minutesText}:${secondsText}`;
    timerEl.textContent = time;
  }, 1000);
};

stopButtonEl.onclick = () => {
  clearInterval(timerIntervalId);
};

resetButtonEl.onclick = () => {
  clearInterval(timerIntervalId);
  minutes = 0;
  seconds = 0;
  hours = 0;
  timerEl.textContent = "00:00:00";
};
