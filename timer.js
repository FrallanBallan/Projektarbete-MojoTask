// -_- MR Angelo
function showTimer() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  timerTab.style.width = "110%";
  timerTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo timer";

  contentContainer.append(test);
}
