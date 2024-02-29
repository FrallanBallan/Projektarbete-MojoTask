d; //API
const apiKey = "57a622d1a38b6d1497b9a19a259dfdea";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

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

  let weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weatherDiv");

  let weatherTitle = document.createElement("h2");
  weatherTitle.innerText = "Weather Forecast";

  let weatherSearch = document.createElement("div");
  weatherSearch.classList.add("weatherSearch");
  weatherSearch.innerHTML = `
  <input
      type = "text"
      name = "cityWeather"
      id = "weatherInput"
      placeholder = "Enter city name"
      />
  <button class="search"><img src="images/search.png" ></button>
  `;

  let weatherResult = document.createElement("div");
  weatherResult.classList.add("weatherResult");

  weatherResult.innerHTML = `
    <div class="weatherResult> 
  <h2 id="city"> Stockholm </h2>
  <h2 id="temp"> 7°C </h2>
  </div>
  
  `;
  weatherDiv.append(weatherTitle, weatherSearch, weatherResult);
  contentContainer.append(weatherDiv);
}

//  <h1> Weather </h1>
//   <div class="divider"></div>
//     <div class="weatherDiv"
//     <label for= "searchWeather"> Weather forecaste in: </label>
//     <input type= "text" placeholder= "Sweden, Stockholm"></input>
//     </div>
//   `
{
  /* <input type="text" placeholder="Enter city name" id="weatherInput" />
  <button><img src="images/search.png" alt="search"></button>  */
}
