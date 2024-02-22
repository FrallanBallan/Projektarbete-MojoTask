//Login - createAccount start - Angelo
let LoginForm = document.querySelector(".Login-form");
let CreateForm = document.querySelector(".CreateAccount-form");
let BtnToCreate = document.querySelector("#CreateBtn");
let CreateAccountBtn = document.querySelector("#CreateAccountBtn");
let AlreadyAccountBtn = document.querySelector("#alredyaccount");

//funktionen som öppnar upp create-form och gömmer login-form
function LoginClose() {
  LoginForm.classList.add("hidden");
  LoginForm.classList.remove("focuss");

  CreateForm.classList.add("focus");
  CreateForm.classList.remove("hidden");
}
//funktionen som öppnar tillbaka Login och stänger create
function LoginOpen() {
  CreateForm.classList.add("hidden");
  CreateForm.classList.remove("focus");

  LoginForm.classList.add("focuss");
  LoginForm.classList.remove("hidden");
}
//knappen som man går till CreateAccountform för att skapa ett konto
BtnToCreate.addEventListener("click", () => {
  LoginClose();
});
//knappen som man skapar ett konto på
CreateAccountBtn.addEventListener("click", () => {
  LoginOpen();
});
//knappen jag har redan ett konto stänger createAccount och öppnar login
AlreadyAccountBtn.addEventListener("click", () => {
  LoginOpen();
});

//Login - CreateAccount End Angelo
