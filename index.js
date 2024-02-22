// //Login - createAccount start - Angelo
// let LoginForm = document.querySelector(".Login-form");
// let CreateForm = document.querySelector(".CreateAccount-form");
// let BtnToCreate = document.querySelector("#CreateBtn");
// let CreateAccountBtn = document.querySelector("#CreateAccountBtn");
// let AlreadyAccountBtn = document.querySelector("#alredyaccount");

// //funktionen som öppnar upp create-form och gömmer login-form
// function LoginClose() {
//   LoginForm.classList.add("hidden");
//   LoginForm.classList.remove("focuss");

//   CreateForm.classList.add("focus");
//   CreateForm.classList.remove("hidden");
// }
// //funktionen som öppnar tillbaka Login och stänger create
// function LoginOpen() {
//   CreateForm.classList.add("hidden");
//   CreateForm.classList.remove("focus");

//   LoginForm.classList.add("focuss");
//   LoginForm.classList.remove("hidden");
// }
// //knappen som man går till CreateAccountform för att skapa ett konto
// BtnToCreate.addEventListener("click", () => {
//   LoginClose();
// });
// //knappen som man skapar ett konto på
// CreateAccountBtn.addEventListener("click", () => {
//   LoginOpen();
// });
// //knappen jag har redan ett konto stänger createAccount och öppnar login
// AlreadyAccountBtn.addEventListener("click", () => {
//   LoginOpen();
// });

//Login - CreateAccount End Angelo

// Funktioner för sidorientering - Start Frans

//Globals

let contentContainer = document.querySelector(".contentContainer");
let homeTab = document.querySelector("#homeTab");
let todoTab = document.querySelector("#todoTab");
let habitsTab = document.querySelector("#habitsTab");
let timerTab = document.querySelector("#timerTab");
let calenderTab = document.querySelector("#calenderTab");
let weatherTab = document.querySelector("#weatherTab");

function showHome() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content

  homeTab.style.width = "100%";
  homeTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo home";
  // this.style.width = "100%";
  console.log(this);

  contentContainer.append(test);
}

function showTodos() {
  //removing styles and content
  contentContainer.innerHTML = "";
  homeTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  todoTab.style.width = "100%";
  todoTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo todo";

  contentContainer.append(test);
}

function showHabits() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  habitsTab.style.width = "100%";
  habitsTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo habits";

  contentContainer.append(test);
}

function showTimer() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  timerTab.style.width = "100%";
  timerTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo timer";

  contentContainer.append(test);
}

function showCalender() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  calenderTab.style.width = "100%";
  calenderTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo caldendoro";

  contentContainer.append(test);
}

function showWeather() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  //removing styles and content
  weatherTab.style.width = "100%";
  weatherTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo hace calor?";

  contentContainer.append(test);
}

function showLogout() {}

// Funktioner för sidorientering - End Frans
