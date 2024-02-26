//Login - createAccount start - Angelo
//divarna
let LoginForm = document.querySelector(".Login-form");
let CreateForm = document.querySelector(".CreateAccount-form");
//knapparna
let BtnToCreate = document.querySelector("#CreateBtn");
let CreateAccountBtn = document.querySelector("#CreateAccountBtn");
let AlreadyAccountBtn = document.querySelector("#alredyaccount");
let LoggainBtn = document.querySelector("#LoginBtn");
//inputs
let Newuser = document.querySelector("#Createusername");
let NewLösen = document.querySelector("#Createpassword");
let RepeatLösen = document.querySelector("#repeatpassword");
let Namn = document.querySelector("#username");
let Lösenord = document.querySelector("#password");
//objekt users som lagrar alla users
let users = {};
//felmeddelande p-tagar
let p = document.querySelector("#error");
let felmessage = document.querySelector(".felmeddelande");
//nollställer alla inputs fält och tagar
function NollställLogin() {
  //nollställer inputsfälten
  Newuser.value = "";
  NewLösen.value = "";
  RepeatLösen.value = "";
  Namn.value = "";
  Lösenord.value = "";
  p.innerText = "";
  felmessage.innerText = "";
  RepeatLösen.classList.remove("errorInput");
}
//funktionen som öppnar upp create-form och gömmer login-form
function LoginClose() {
  LoginForm.classList.add("hidden");
  LoginForm.classList.remove("focuss");

  CreateForm.classList.add("focus");
  CreateForm.classList.remove("hidden");
  NollställLogin();
}
//funktionen som öppnar tillbaka Login och stänger create
function LoginOpen() {
  CreateForm.classList.add("hidden");
  CreateForm.classList.remove("focus");

  LoginForm.classList.add("focuss");
  LoginForm.classList.remove("hidden");
  NollställLogin();
}
//knappen som man går till CreateAccountform för att skapa ett konto
BtnToCreate.addEventListener("click", () => {
  LoginClose();
});
//knappen som man skapar ett konto på
CreateAccountBtn.addEventListener("click", () => {
  //om lösen input och reapeatlösen input matchar gå vidare
  if (NewLösen.value === RepeatLösen.value) {
    if (
      //om användarnamnetin har onödiga mellanslag i sig ta bort dom trim()
      Newuser.value.trim() !== "" &&
      NewLösen.value.trim() !== "" &&
      //kolla så att users inte redan har ett value med samma användarnamn value
      !users.hasOwnProperty(Newuser.value)
    ) {
      //spara i localstorage
      users[Newuser.value] = NewLösen.value;
      localStorage.setItem("users", JSON.stringify(users));
      LoginOpen();
      //annars skriv ut felmeddelande
    } else {
      felmessage.innerText = "Användarnamn upptaget eller fältet tomt!";
    }
    //annars om lösenorden inte matchar varandra skriv ut error meddelande
  } else {
    RepeatLösen.classList.add("errorInput");
    felmessage.innerText = "Lösenordet matchar inte";
  }
});
//knappen jag har redan ett konto stänger createAccount och öppnar login
AlreadyAccountBtn.addEventListener("click", () => {
  LoginOpen();
});

LoggainBtn.addEventListener("click", () => {
  //hämtar sessionstorage med keyn alla users och lägger in detta i en variabel
  let storedUsers = JSON.parse(localStorage.getItem("users"));
  //om storedUsers hadownpropery(kollar så att objektet innehåller en specifik egenskap såg den kollar om storeduser innehåller likadant användarnamn som användaren har stoppat in i inputen)
  if (
    storedUsers.hasOwnProperty(Namn.value) &&
    storedUsers[Namn.value] === Lösenord.value
  ) {
    console.log("hej");
    NollställLogin();
  } else {
    //misslyckades att logga in
    p.innerText = "Felaktigt användarnamn eller lösenord!";
  }
});

//Login - CreateAccount End Angelo
