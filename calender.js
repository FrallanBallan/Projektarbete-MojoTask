// -_- Mr Sure
function showCalender() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  calenderTab.style.width = "110%";
  calenderTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo caldendoro";

  contentContainer.append(test);
}
