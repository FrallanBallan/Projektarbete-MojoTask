let remainingTime = 0;
let timerInterval;
//funktionen kollar input om de är en valid value och om de är det körs updatetimerdisplay
function startTimer() {
  if (!timerInterval) {
    const timeInput = document.getElementById('timeInput');
    const time = parseInt(timeInput.value, 10);
    //kollar så att time är större än 0 annars skicka ut alert kollar också att time är en sifra med hjälp av isNaN = is not a number
    if (isNaN(time) || time <= 0) {
      alert(
        'Negative time or no number at all? You ain´t the brightest in the room'
      );
      return;
    }
    if (remainingTime <= 0) {
      remainingTime = time * 60; // converterar att 1 min är = 60 sekunder
    }
    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
    timeInput.value = 1;

    document.getElementById('StartTimerbtn').style.display = 'none';
    document.getElementById('PauseTimerbtn').style.display = 'inline';
    document.getElementById('ResetTimerbtn').style.display = 'inline';
    let TimerBox = document.querySelector('.TimerContainer');
    TimerBox.classList.add('blur');
  }
}
//funktionen pausar timern
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;

  document.getElementById('PauseTimerbtn').style.display = 'none';
  document.getElementById('StartTimerbtn').style.display = 'inline';
  let TimerBox = document.getElementsByClassName('TimerContainer')[0];
  TimerBox.classList.remove('blur');
}
//funktionen nollställer timern
function resetTimer() {
  pauseTimer();
  remainingTime = 0;
  updateTimerDisplay();

  document.getElementById('ResetTimerbtn').style.display = 'none';
  let TimerBox = document.getElementsByClassName('TimerContainer')[0];
  TimerBox.classList.remove('blur');
}
//funktionen updaterar timern och kollar om den blir klar så skriv ut meddelande
function updateTimer() {
  if (remainingTime <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('timer').textContent = 'Done!';
  } else {
    remainingTime--;
    updateTimerDisplay();
  }
}
//funktionen convertar från min till sekund
function updateTimerDisplay() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  document.getElementById('timer').textContent =
    formatTime(minutes) + ':' + formatTime(seconds);
}
//funktionen ser till så att de aldrig kan bli en 10 exempel om jag går från en min till en annan blir det 9
function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}
