const digitClock = document.querySelector(".digitalClock");
const digitalClock = () => {
  const date = new Date(); // to get the date
  let hours = date.getHours(); // to get the hours
  let minutes = date.getMinutes(); // to get minutes
  let seconds = date.getSeconds(); // to get seconds
  let mood = "AM";
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    mood = "PM";
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  digitClock.innerHTML = `${hours} : ${minutes} : ${seconds} ${mood}`;
  setTimeout(function () {
    digitalClock();
  }, 1000);
};
digitalClock();
