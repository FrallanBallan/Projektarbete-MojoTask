//FF_BAOM
//API
const apiKey = "57a622d1a38b6d1497b9a19a259dfdea";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiUrlStart =
  "https://api.openweathermap.org/data/2.5/weather?q=stockholm";
// "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//GLOBALS
let weatherInput = document.querySelector("#weatherInput");
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");

let getData = async () => {
  if (!document.querySelector("#weatherInput").value) {
    let response = await axios.get(apiUrlStart + `&appid=${apiKey}`);
    console.log(response);
    renderLocation(response);
  } else {
    let searchedCity = document.querySelector("#weatherInput").value;
    let response = await axios.get(apiUrl + `&appid=${apiKey}`, {
      params: {
        q: searchedCity,
      },
    });
    renderLocation(response);
  }
};

let showWeather = async () => {
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

  let weatherInput = document.createElement("input");
  weatherInput.type = "text";
  weatherInput.id = "weatherInput";
  weatherInput.placeholder = "Enter city name";

  let weatherBtn = document.createElement("button");
  weatherBtn.classList.add("search");
  weatherBtn.id = "searchBtn";
  weatherBtn.innerHTML = `<img src="images/search.png">`;

  let weatherResult = document.createElement("div");
  weatherResult.classList.add("weatherResult");

  weatherSearch.append(weatherInput, weatherBtn);
  weatherDiv.append(weatherTitle, weatherSearch, weatherResult);
  contentContainer.append(weatherDiv);

  weatherBtn.addEventListener("click", () => {
    getData();
  });
  let startWeather = await getData();
};

function renderLocation(data) {
  let weatherResult = document.querySelector(".weatherResult");
  weatherResult.innerHTML = "";

  let weatherCity = document.createElement("h2");
  weatherCity.innerText = data.data.name;

  let weatherIcon = document.createElement("img");
  weatherIcon.src = "/images/rain.png";

  let weatherTemp = document.createElement("h2");
  weatherTemp.id = "weatherTemp";
  weatherTemp.innerText = Math.round(data.data.main.temp - 273.15) + "°C";

  let weatherDesc = document.createElement("p");
  weatherDesc.innerText = data.data.weather[0].main;

  //Ny div borde skapas
  let weatherSunrise = document.createElement("p");
  weatherSunrise.innerText = new Date(data.data.sys.sunrise * 1000);

  let weatherWind = document.createElement("p");
  weatherWind.innerText = "Windspeed:" + data.data.wind.speed;

  weatherResult.append(
    weatherCity,
    weatherIcon,
    weatherTemp,
    weatherDesc,
    weatherWind,
    weatherSunrise
  );
}
