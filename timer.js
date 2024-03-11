let remainingTime = 0;
let timerInterval;
//hämtar ljudet
let audio = new Audio("images/heMan.mp3");
//kollar om audio ljudet har nåt slutet av sig isåfall starta den igen
audio.addEventListener("ended", function () {
  audio.play(); // Spela ljudet igen när det är slut
});
//funktionen kollar input om de är en valid value och om de är det körs updatetimerdisplay
function startTimer() {
  if (!timerInterval) {
    const timeInput = document.getElementById("timeInput");
    const time = parseInt(timeInput.value, 10);
    //kollar så att time är större än 0 annars skicka ut alert kollar också att time är en sifra med hjälp av isNaN = is not a number
    if (isNaN(time) || time <= 0) {
      alert(
        "Negative time or no number at all? You ain´t the brightest in the room"
      );
      return;
    }
    if (remainingTime <= 0) {
      remainingTime = time * 60; // converterar att 1 min är = 60 sekunder
    }
    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
    timeInput.value = 1;

    document.getElementById("StartTimerbtn").style.display = "none";
    document.getElementById("PauseTimerbtn").style.display = "inline";
    document.getElementById("ResetTimerbtn").style.display = "inline";
    document.getElementById("timeInput").style.display = "none";
    document.getElementById("timelabel").style.display = "none";
    let TimerBox = document.querySelector(".TimerContainer");
    TimerBox.classList.add("blur");
    if (audio.paused) {
      audio.play();
    }
  }
}
//funktionen pausar timern
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  document.getElementById("PauseTimerbtn").style.display = "none";
  document.getElementById("StartTimerbtn").style.display = "inline";
  let TimerBox = document.getElementsByClassName("TimerContainer")[0];
  TimerBox.classList.remove("blur");
  if (!audio.paused) {
    audio.pause();
  }
}
//funktionen nollställer timern
function resetTimer() {
  pauseTimer();
  remainingTime = 0;
  updateTimerDisplay();

  document.getElementById("ResetTimerbtn").style.display = "none";
  let TimerBox = document.getElementsByClassName("TimerContainer")[0];
  TimerBox.classList.remove("blur");
  document.getElementById("timeInput").style.display = "inline";
  document.getElementById("timelabel").style.display = "inline";

  audio.currentTime = 0;
}
//funktionen updaterar timern och kollar om den blir klar så skriv ut meddelande
function updateTimer() {
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("timer").textContent = "Done!";
  } else {
    remainingTime--;
    updateTimerDisplay();
  }
}
//funktionen convertar från min till sekund
function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  document.getElementById("timer").textContent =
    formatTime(minutes) + ":" + formatTime(seconds);
}
//funktionen ser till så att de aldrig kan bli en 10 exempel om jag går från en min till en annan blir det 9
function formatTime(time) {
  return (time < 10 ? "0" : "") + time;
}
