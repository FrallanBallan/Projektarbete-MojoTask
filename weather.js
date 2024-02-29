//API

//GLOBALS

function showWeather() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  //removing styles and content
  weatherTab.style.width = "110%";
  weatherTab.style.borderRadius = "0% 10% 10% 0%";

  let test = document.createElement("h1");
  test.innerHTML = "estoy testo hace cadddddddlor?";

  contentContainer.append(test);
}
