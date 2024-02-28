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
//fetchar quot api functionen
let getQuat = async () => {
  let response = await fetch("https://api.quotable.io/random");
  let json = await response.json();
  let quatText = document.querySelector(".quot");

  quatText.innerText = json.content;
};

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
  // Rensa session storage för att inte ha flera användares data vid inloggning kvar
  sessionStorage.clear();
  //hämtar localestorage med keyn alla users och lägger in detta i en variabel
  let storedUsers = JSON.parse(localStorage.getItem("users"));
  //om storedUsers hadownpropery(kollar så att objektet innehåller en specifik egenskap såg den kollar om storeduser innehåller likadant användarnamn som användaren har stoppat in i inputen)
  if (
    storedUsers.hasOwnProperty(Namn.value) &&
    storedUsers[Namn.value] === Lösenord.value
  ) {
    //inloggningen lyckades
    //laddningsidan startar tills man skickas vidare
    document.getElementById("LoadScreen").style.display = "block";
    //välkomst meddelandet
    let WelcomeMessage = document.querySelector(".Welcome-Message");
    WelcomeMessage.innerText = `Welcome back ${Namn.value}`;
    //hämtar quats funktionen
    getQuat();
    //sätter en timeout på 5 sekunder tills man rör sig till home.html
    setTimeout(() => {
      window.location.href = "home.html";
    }, 5000); // 5 sekunder

    // Hämtar todoData från local storage
    let todoData = JSON.parse(localStorage.getItem("todoData"));
    if (todoData) {
      // Filtrerar todoData för att få endast de objekt där objekt keyn id matchar användarens namn
      let userTodoData = todoData.filter((item) => item.id === "testPerson");
      //nu använd seassion storage istället för att överföra datan känns som en bättre och enklare ide.
      //problemet här är att om jag loggar in på en användare o sedan loggar direkt in på en annan utan att stänga fliken så finns all data kvar så jag måste rensa seassion storage vid början av klick vid inloggning
      sessionStorage.setItem("userTodoData", JSON.stringify(userTodoData));
      sessionStorage.setItem("NameUser", Namn.value);

      //meddelar simon som sitter med todo att han måste hämta Nameuser från sessionStorage och dess value ska tilldelas som id vid skapadet av en todo
      //meddelar även simon om att personen som loggar in får alla sina todos som finns sparade i localestorage filterade i seassion storage så att användaren endast har sina egna todos så allt han ska behöva göra nu är att hämta datan från seassions
    }

    NollställLogin();
  } else {
    //misslyckades att logga in
    p.innerText = "Felaktigt användarnamn eller lösenord!";
  }
});

//Login - CreateAccount End Angelo

// Koppla login localeStorage med Todo localeStorage Start Angelo

//när man lyckas logga in kolla i locale storage om de finns en key som är samma som name.value alltså de du nyss använt som usernamn och lyckades logga in med om de finns hämta dessa todo och importera samt den datan till nästa fil.
//när todo skapas måste de använda name.value som key samt på login också skapa en global variabel som kan bli importerad till deras fil med name.value och denna variabeln får ett nytt värde när man lyckas logga in
//så att name.value alltid har rätt inloggad usernamn på sig. om användaren loggat in förut är de tillbaka till kolla i login om username finns som en key med samma namn
//annars om användaren inte loggat in förut så finns nu en global vairabel för att skapa upp nya todos med så att man

// Koppla login localeStorage med Todo localeStorage end Angelo
