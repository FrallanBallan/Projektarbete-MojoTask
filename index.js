var countries = [
  { code: "AF", name: "Afghanistan" },
  { code: "AX", name: "Åland Islands" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Algeria" },
  { code: "AS", name: "American Samoa" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguilla" },
  { code: "AQ", name: "Antarctica" },
  { code: "AG", name: "Antigua and Barbuda" },
  { code: "AR", name: "Argentina" },
  { code: "AM", name: "Armenia" },
  { code: "AW", name: "Aruba" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "AZ", name: "Azerbaijan" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Bahrain" },
  { code: "BD", name: "Bangladesh" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Belarus" },
  { code: "BE", name: "Belgium" },
  { code: "BZ", name: "Belize" },
  { code: "BJ", name: "Benin" },
  { code: "BM", name: "Bermuda" },
  { code: "BT", name: "Bhutan" },
  { code: "BO", name: "Bolivia" },
  { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "BA", name: "Bosnia and Herzegovina" },
  { code: "BW", name: "Botswana" },
  { code: "BV", name: "Bouvet Island" },
  { code: "BR", name: "Brazil" },
  { code: "IO", name: "British Indian Ocean Territory" },
  { code: "BN", name: "Brunei Darussalam" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CA", name: "Canada" },
  { code: "KY", name: "Cayman Islands" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "CL", name: "Chile" },
  { code: "CN", name: "China" },
  { code: "CX", name: "Christmas Island" },
  { code: "CC", name: "Cocos (Keeling) Islands" },
  { code: "CO", name: "Colombia" },
  { code: "KM", name: "Comoros" },
  { code: "CG", name: "Congo" },
  { code: "CD", name: "Congo, Democratic Republic of the" },
  { code: "CK", name: "Cook Islands" },
  { code: "CR", name: "Costa Rica" },
  { code: "HR", name: "Croatia" },
  { code: "CU", name: "Cuba" },
  { code: "CW", name: "Curaçao" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "DJ", name: "Djibouti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "Dominican Republic" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egypt" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Equatorial Guinea" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "ET", name: "Ethiopia" },
  { code: "FK", name: "Falkland Islands (Malvinas)" },
  { code: "FO", name: "Faroe Islands" },
  { code: "FJ", name: "Fiji" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "GF", name: "French Guiana" },
  { code: "PF", name: "French Polynesia" },
  { code: "TF", name: "French Southern Territories" },
  { code: "GA", name: "Gabon" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Germany" },
  { code: "GH", name: "Ghana" },
  { code: "GI", name: "Gibraltar" },
  { code: "GR", name: "Greece" },
  { code: "GL", name: "Greenland" },
  { code: "GD", name: "Grenada" },
  { code: "GP", name: "Guadeloupe" },
  { code: "GU", name: "Guam" },
  { code: "GT", name: "Guatemala" },
  { code: "GG", name: "Guernsey" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haiti" },
  { code: "HM", name: "Heard Island and McDonald Islands" },
  { code: "VA", name: "Holy See (Vatican City State)" },
  { code: "HN", name: "Honduras" },
  { code: "HK", name: "Hong Kong" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IR", name: "Iran, Islamic Republic of" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Ireland" },
  { code: "IM", name: "Isle of Man" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JM", name: "Jamaica" },
  { code: "JP", name: "Japan" },
  { code: "JE", name: "Jersey" },
  { code: "JO", name: "Jordan" },
  { code: "KZ", name: "Kazakhstan" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "KP", name: "Korea, Democratic People's Republic of" },
  { code: "KR", name: "Korea, Republic of" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "LA", name: "Lao People's Democratic Republic" },
  { code: "LV", name: "Latvia" },
  { code: "LB", name: "Lebanon" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "LY", name: "Libya" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MO", name: "Macao" },
  { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MY", name: "Malaysia" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Marshall Islands" },
  { code: "MQ", name: "Martinique" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "YT", name: "Mayotte" },
  { code: "MX", name: "Mexico" },
  { code: "FM", name: "Micronesia, Federated States of" },
  { code: "MD", name: "Moldova, Republic of" },
  { code: "MC", name: "Monaco" },
  { code: "MN", name: "Mongolia" },
  { code: "ME", name: "Montenegro" },
  { code: "MS", name: "Montserrat" },
  { code: "MA", name: "Morocco" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Netherlands" },
  { code: "NC", name: "New Caledonia" },
  { code: "NZ", name: "New Zealand" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Niger" },
  { code: "NG", name: "Nigeria" },
  { code: "NU", name: "Niue" },
  { code: "NF", name: "Norfolk Island" },
  { code: "MP", name: "Northern Mariana Islands" },
  { code: "NO", name: "Norway" },
  { code: "OM", name: "Oman" },
  { code: "PK", name: "Pakistan" },
  { code: "PW", name: "Palau" },
  { code: "PS", name: "Palestine, State of" },
  { code: "PA", name: "Panama" },
  { code: "PG", name: "Papua New Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PE", name: "Peru" },
  { code: "PH", name: "Philippines" },
  { code: "PN", name: "Pitcairn" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "PR", name: "Puerto Rico" },
  { code: "QA", name: "Qatar" },
  { code: "RE", name: "Réunion" },
  { code: "RO", name: "Romania" },
  { code: "RU", name: "Russian Federation" },
  { code: "RW", name: "Rwanda" },
  { code: "BL", name: "Saint Barthélemy" },
  { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
  { code: "KN", name: "Saint Kitts and Nevis" },
  { code: "LC", name: "Saint Lucia" },
  { code: "MF", name: "Saint Martin (French part)" },
  { code: "PM", name: "Saint Pierre and Miquelon" },
  { code: "VC", name: "Saint Vincent and the Grenadines" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Sao Tome and Principe" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SG", name: "Singapore" },
  { code: "SX", name: "Sint Maarten (Dutch part)" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "South Africa" },
  { code: "GS", name: "South Georgia and the South Sandwich Islands" },
  { code: "SS", name: "South Sudan" },
  { code: "ES", name: "Spain" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudan" },
  { code: "SR", name: "Suriname" },
  { code: "SJ", name: "Svalbard and Jan Mayen" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "SY", name: "Syrian Arab Republic" },
  { code: "TW", name: "Taiwan, Province of China" },
  { code: "TJ", name: "Tajikistan" },
  { code: "TZ", name: "Tanzania, United Republic of" },
  { code: "TH", name: "Thailand" },
  { code: "TL", name: "Timor-Leste" },
  { code: "TG", name: "Togo" },
  { code: "TK", name: "Tokelau" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad and Tobago" },
  { code: "TN", name: "Tunisia" },
  { code: "TR", name: "Turkey" },
  { code: "TM", name: "Turkmenistan" },
  { code: "TC", name: "Turks and Caicos Islands" },
  { code: "TV", name: "Tuvalu" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ukraine" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "GB", name: "United Kingdom of Great Britain and Northern Ireland" },
  { code: "US", name: "United States of America" },
  { code: "UM", name: "United States Minor Outlying Islands" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistan" },
  { code: "VU", name: "Vanuatu" },
  { code: "VE", name: "Venezuela, Bolivarian Republic of" },
  { code: "VN", name: "Viet Nam" },
  { code: "VG", name: "Virgin Islands, British" },
  { code: "VI", name: "Virgin Islands, U.S." },
  { code: "WF", name: "Wallis and Futuna" },
  { code: "EH", name: "Western Sahara" },
  { code: "YE", name: "Yemen" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabwe" },
];
var select = document.getElementById("countrySelect");

countries.forEach(function (country) {
  var option = document.createElement("option");
  option.value = country.name;
  option.textContent = country.name;
  select.appendChild(option);
});

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
let userList = [];
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
      users.id = Newuser.value;
      users.pass = NewLösen.value;
      console.log(users);

      storeUsersLocal();

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

function storeUsersLocal() {
  // Retrieve existing user data from localStorage
  let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  // Push new user data into the existing array

  if (storedUsers.some((user) => user.id === users.id)) {
    felmessage.innerText = "Användarnamn upptaget eller fältet tomt!";
  } else {
    storedUsers.push(users);
    // Store the updated array back into localStorage
    localStorage.setItem("users", JSON.stringify(storedUsers));
    // Reset the users object
    users = {};
    LoginOpen();
  }
}
//knappen jag har redan ett konto stänger createAccount och öppnar login

AlreadyAccountBtn.addEventListener("click", () => {
  LoginOpen();
});

LoggainBtn.addEventListener("click", () => {
  // Rensa session storage för att inte ha flera användares data vid inloggning kvar
  sessionStorage.clear();
  //hämtar localestorage med keyn alla users och lägger in detta i en variabel
  let storedUsers = JSON.parse(localStorage.getItem("users"));
  console.log(storedUsers);
  //om storedUsers hadownpropery(kollar så att objektet innehåller en specifik egenskap såg den kollar om storeduser innehåller likadant användarnamn som användaren har stoppat in i inputen)
  if (
    storedUsers.some(
      (storedUser) =>
        storedUser.id === Namn.value && storedUser.pass === Lösenord.value
    )
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
    // let todoData = JSON.parse(localStorage.getItem('todoData'));
    sessionStorage.setItem("NameUser", Namn.value);

    //   if (todoData) {
    //     // Filtrerar todoData för att få endast de objekt där objekt keyn id matchar användarens namn
    //     // let userTodoData = todoData.filter((item) => item.id === 'testPerson');
    //     //nu använd seassion storage istället för att överföra datan känns som en bättre och enklare ide.
    //     //problemet här är att om jag loggar in på en användare o sedan loggar direkt in på en annan utan att stänga fliken så finns all data kvar så jag måste rensa seassion storage vid början av klick vid inloggning
    //     // sessionStorage.setItem('userTodoData', JSON.stringify(userTodoData));
    //     //meddelar simon som sitter med todo att han måste hämta Nameuser från sessionStorage och dess value ska tilldelas som id vid skapadet av en todo
    //     //meddelar även simon om att personen som loggar in får alla sina todos som finns sparade i localestorage filterade i seassion storage så att användaren endast har sina egna todos så allt han ska behöva göra nu är att hämta datan från seassions
    //   }

    //   NollställLogin();
  } else {
    //misslyckades att logga in
    p.innerText = "Felaktigt användarnamn eller lösenord!";
    storedUsers.forEach((storedUser) => {
      console.log(storedUser.id, storedUser.pass);
    });
  }
  NollställLogin();
});

//Login - CreateAccount End Angelo

// Koppla login localeStorage med Todo localeStorage Start Angelo

//när man lyckas logga in kolla i locale storage om de finns en key som är samma som name.value alltså de du nyss använt som usernamn och lyckades logga in med om de finns hämta dessa todo och importera samt den datan till nästa fil.
//när todo skapas måste de använda name.value som key samt på login också skapa en global variabel som kan bli importerad till deras fil med name.value och denna variabeln får ett nytt värde när man lyckas logga in
//så att name.value alltid har rätt inloggad usernamn på sig. om användaren loggat in förut är de tillbaka till kolla i login om username finns som en key med samma namn
//annars om användaren inte loggat in förut så finns nu en global vairabel för att skapa upp nya todos med så att man

// Koppla login localeStorage med Todo localeStorage end Angelo
