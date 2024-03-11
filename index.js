//country selector start Angelo
//chatgpt generated denna arrayen
var countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bonaire, Sint Eustatius and Saba", code: "BQ" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Curaçao", code: "CW" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and McDonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People's Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People's Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, the Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestine, State of", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Réunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Barthélemy", code: "BL" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Martin (French part)", code: "MF" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Sint Maarten (Dutch part)", code: "SX" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom of Great Britain and Northern Ireland", code: "GB" },
  { name: "United States of America", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela, Bolivarian Republic of", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

let select = document.getElementById("countrySelect");

countries.forEach(function (country) {
  let option = document.createElement("option");
  option.value = country.name;
  option.textContent = country.name;
  select.appendChild(option);
});
//country selector end Angelo

//Login - createAccount start - Angelo
//divarna
let LoginForm = document.querySelector(".Login-form");
let CreateForm = document.querySelector(".CreateAccount-form");
let slider = document.querySelector(".slider");

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
  slider.classList.add("right");
  NollställLogin();
}
//funktionen som öppnar tillbaka Login och stänger create
function LoginOpen() {
  slider.classList.remove("right");
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

      let userTodoData = todoData.filter((item) => item.id === Namn.value);

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
