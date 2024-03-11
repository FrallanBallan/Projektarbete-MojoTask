// -_-
//FF-BAOM

// Globals
let habitContainer = document.querySelector(".habitCardContainer");
let contentContainer = document.querySelector(".contentContainer");
let homeTab = document.querySelector("#homeTab");
let todoTab = document.querySelector("#todoTab");
let habitsTab = document.querySelector("#habitsTab");
let timerTab = document.querySelector("#timerTab");
let calenderTab = document.querySelector("#calenderTab");
let weatherTab = document.querySelector("#weatherTab");

//User
let sessionUser = sessionStorage.getItem("NameUser");
let userName = sessionUser ? sessionUser : "failed";
console.log(userName);

// Global Arrays
let localTodos = localStorage.getItem("todoData");
let todoListUnfilter = localTodos ? JSON.parse(localTodos) : []; // JSON.parse(localStorage.getItem('links'));
let todoList = todoListUnfilter.filter(
  (todoObject) => todoObject.id === userName
);
console.log(todoList);

let localHabits = localStorage.getItem("habitData");
let habitListUnfilter = localHabits ? JSON.parse(localHabits) : [];
let habitList = habitListUnfilter.filter(
  (habitObject) => habitObject.id === userName
);

function showHome() {
  //WEATHER TEST START
  const apiKey = "57a622d1a38b6d1497b9a19a259dfdea";
  const apiUrlStart =
    "https://api.openweathermap.org/data/2.5/weather?q=stockholm";

  let getData = async () => {
    let response = await axios.get(apiUrlStart + `&appid=${apiKey}`);
    console.log(response);
    renderLocation(response);
  };

  // Weather for home tab
  function renderLocation(data) {
    let city = document.querySelector("#weatherCity");
    city.innerText = data.data.name;

    let temp = document.querySelector("#weatherTemp");
    temp.innerText = Math.round(data.data.main.temp - 273.15) + "°C ";

    let weather = document.querySelector("#weatherWeather");
    weather.innerText = data.data.weather[0].main;

    let weatherIcons = document.querySelector("#weatherIcons");
    let weatherIcon = document.createElement("img");
    if (data.data.weather[0].main === "Clouds") {
      weatherIcon.src = "/images/clouds.png";
    } else if (data.data.weather[0].main === "Clear") {
      weatherIcon.src = "/images/clear.png";
    } else if (data.data.weather[0].main === "Drizzle") {
      weatherIcon.src = "/images/drizzle.png";
    } else if (data.data.weather[0].main === "Mist") {
      weatherIcon.src = "/images/mist.png";
    } else if (data.data.weather[0].main === "Rain") {
      weatherIcon.src = "/images/rain.png";
    } else if (data.data.weather[0].main === "Snow") {
      weatherIcon.src = "/images/snow.png";
    } else if (data.data.weather[0].main === "Clear") {
      weatherIcon.src = "/images/clear.png";
    } else {
      weatherIcon.src = "/images/logo.png";
    }

    weatherIcons.append(weatherIcon);
    let weatherDiv = document.querySelector(".homeCard:nth-of-type(3)");
    if (data.data.weather[0].main === "Clouds") {
      weatherDiv.style.backgroundImage = 'url("/gifs/cloudy - Copy.gif")';
    } else if (data.data.weather[0].main === "Drizzle") {
      weatherDiv.style.backgroundImage = 'url("/gifs/drizzle.gif")';
    } else if (data.data.weather[0].main === "Mist") {
      weatherDiv.style.backgroundImage = 'url("/gifs/misty.gif")';
    } else if (data.data.weather[0].main === "Rain") {
      weatherDiv.style.backgroundImage = 'url("/gifs/rain.gif")';
    } else if (data.data.weather[0].main === "Snow") {
      weatherDiv.style.backgroundImage = 'url("/gifs/snow.gif")';
    } else if (data.data.weather[0].main === "Clear") {
      weatherDiv.style.backgroundImage = 'url("/gifs/clear.gif")';
    } else {
      weatherDiv.style.backgroundImage = 'url("/gifs/weather.gif")';
    }
  }
  getData();

  //WEATHER TEST END

  //removing styles and content
  // contentContainer.innerHTML = '';
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  timerTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content

  homeTab.style.width = "110%";
  homeTab.style.borderRadius = "0% 10% 10% 0%";

  contentContainer.innerHTML = `
  <div class="homeCardContainer">
  
  <div class="homeCard" onclick=showTodos()>
    <i class="fa-solid fa-pen-to-square"></i>
  </div>
  <div class="homeCard" onclick=showHabits()>
  
    <i class="fa-solid fa-person-praying"></i>
  </div>
  <div class="homeCard" onclick=showWeather()>
    <h3 class="montserrat-heading">Todays Weather</h3>
    <div class="weatherIcon" id="weatherIcons">

    </div>
    <h2 id="weatherTemp" class="montserrat-heading">Temperture:</h2>
    <h3 id="weatherWeather">Weather: </h3>
    <h3 id="weatherCity"></h3>
  </div>
</div>
<div class="divider"></div>
<div class="homeOverviewContainer">
  <div class="todoOverview" >
    <h3>Todo's overview</h3>
    <ul class="overviewList todo" id="todoOverviewUl">
   
    </ul>
    <button class="btn primary" onclick="showTodos()">See all</button>
  </div>
  <div class="habitOverview">
    <h3>Habits overview</h3>
    <ul class="overviewList habits" id="habitOverviewUl">

    </ul>
    <button class="btn primary" onclick="showHabits()">See all</button>
  </div>
</div>
  `;
  // Render li from todoList and show on home page -start
  let todoUl = document.querySelector("#todoOverviewUl");
  todoList.forEach((todo) => {
    console.log(todo);

    let todoLi = document.createElement("li");
    todoLi.innerText = todo.title;
    todoUl.append(todoLi);
  });
  // Render li from todoList and show on home page -end

  //render li from HabitList and show on home page -start

  let habitUl = document.querySelector("#habitOverviewUl");
  habitList.forEach((habit) => {
    let habitLi = document.createElement("li");
    habitLi.innerText = habit.title;
    habitUl.append(habitLi);
  });

  //render li from HabitList and show on home page -end
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
  todoTab.style.width = "110%";
  todoTab.style.borderRadius = "0% 10% 10% 0%";

  contentContainer.innerHTML = `
  <div class="homeTodoTab">
  <div class="todoTitleFilter">
    <h2>Your todo's</h2>
  </div>
  <div class="divider"></div>
  <div class="createTodo card" onclick="createTodo()">
    <i class="fa-solid fa-plus"></i>
    <p>Create Todo</p>
  </div>
  <div class="divider"></div>
  <h3>Unfinished</h3>
  <div class="todoCardContainer" id="todoContainerUnfinished">
  </div>
  <div class="divider"></div>
  <h3>Finished</h3>
  <div class="todoCardContainer" id="todoCardContainerFinished">

  </div>
</div>
`;
  let filterTodosContainer = document.querySelector(".todoTitleFilter");
  // Create filter categorys
  renderCategoryFilter(filterTodosContainer);
  // Create filter categorys end.
  printTodosOnPage(todoList);

  // add eventlistener for removing todoCards end
}

//Render categorys
function renderCategoryFilter(filterTodosContainer) {
  let filterContainer = document.createElement("div");
  let filterList = [
    { icon: `<i class="fa-solid fa-house"></i>`, value: "Home" },
    { icon: `<i class="fa-solid fa-school"></i>`, value: "School" },
    { icon: `<i class="fa-solid fa-dumbbell"></i>`, value: "Training" },
    { icon: `<i class="fa-solid fa-hand-sparkles"></i>`, value: "Chores" },
  ];

  filterList.forEach((category) => {
    let input = document.createElement("input");
    input.type = "checkbox";

    input.value = `${category.value}`;
    input.id = `${category.value}`;
    input.setAttribute("name", "filterTodos");
    // creating label for checkbox
    let label = document.createElement("label");

    // assigning attributes for the created label tag
    label.htmlFor = `${category.value}`;
    label.innerHTML = `${category.icon}`;

    // appending the created text to
    // the created label tag
    label.append(input);
    filterContainer.append(label);

    input.addEventListener("change", () => {
      let catergoryChoices = Array.from(
        document.getElementsByName("filterTodos")
      );
      let filterArray = [];
      catergoryChoices.forEach((category) => {
        if (category.checked) {
          filterArray.push(category.value);
          //   console.log(filterString);
        }
      });
      console.log(filterArray);
      let todoLists = document.querySelectorAll(".todoCategory");
      console.log(todoLists);
      if (filterArray.length > 0) {
        filterArray.forEach((filter) => {
          todoList.forEach((todo) => {
            if (todo.category.includes(filter)) {
              renderFilterdSearch(filterArray);
            }
          });
        });
      } else {
        showTodos();
      }
    });
  });

  let timeFilters = document.createElement("select");
  timeFilters.id = "timeFilter";
  let timeFilterLabel = document.createElement("label");
  timeFilterLabel.setAttribute("for", timeFilters.id);
  timeFilterLabel.innerHTML = "Choose your filter";

  let timeFiltersList = [
    {
      icon: `<i class="fa-solid fa-arrow-up"></i>`,
      value: "all",
      text: "All",
    },
    {
      icon: `<i class="fa-solid fa-arrow-up"></i>`,
      value: "deadlineUp",
      text: "Deadline Asc",
    },
    {
      icon: `<i class="fa-solid fa-arrow-down"></i>`,
      value: "deadlineDown",
      text: "Deadline Des",
    },
    {
      icon: `<i class="fa-solid fa-arrow-up"></i>`,
      value: "timeUp",
      text: "Time Asc",
    },
    {
      icon: `<i class="fa-solid fa-arrow-down"></i>`,
      value: "timeDown",
      text: "Time Des",
    },
  ];
  timeFiltersList.forEach((optionLi) => {
    console.log(optionLi);
    let timeOption = document.createElement("option");
    timeOption.value = optionLi.value;
    // let icon = document.createElement('span');
    // icon.innerHTML = optionLi.icon;
    timeOption.text = optionLi.text;
    // timeOption.setAttribute('data-icon', `${optionLi.icon}`);
    timeFilters.append(timeOption);
  });
  filterContainer.append(timeFilterLabel, timeFilters);
  filterTodosContainer.append(filterContainer);
}

// Render when filterd on category

function renderFilterdSearch(filterArray) {
  let filterdArray = [];
  todoList.forEach((todo) => {
    filterArray.forEach((filter) => {
      if (todo.category.includes(filter)) {
        filterdArray.push(todo);
      }
    });
  });
  printTodosOnPage(filterdArray);
}

function printTodosOnPage(list) {
  let todoContainerUnfinished = document.querySelector(
    "#todoContainerUnfinished"
  );
  let todoCardContainerFinished = document.querySelector(
    "#todoCardContainerFinished"
  );
  todoContainerUnfinished.innerHTML = "";
  todoCardContainerFinished.innerHTML = "";

  document.querySelector("#timeFilter").addEventListener("change", () => {
    filterOnTimes(list, document.querySelector("#timeFilter").value);
  });

  console.log(list);

  list.forEach((todoObject) => {
    // filterArray.forEach((filter) => {
    //   if (todoObject.category.includes(filter)) {
    let todoCard = document.createElement("div");
    todoCard.classList.add("card");
    let todoTitle = document.createElement("p");
    todoTitle.innerText = todoObject.title;
    let todoCategory = document.createElement("div");
    todoCategory.classList.add("todoCategory");
    if (todoObject.category === "Home") {
      todoCategory.innerHTML = `<i class="fa-solid fa-house"></i>`;
    } else if (todoObject.category === "School") {
      todoCategory.innerHTML = `<i class="fa-solid fa-school"></i>`;
    } else if (todoObject.category === "Training") {
      todoCategory.innerHTML = `<i class="fa-solid fa-dumbbell"></i>`;
    } else {
      todoCategory.innerHTML = `<i class="fa-solid fa-hand-sparkles"></i>`;
    }

    todoCard.innerHTML += `
            <button class="removeBtn">
            <i class="fa-regular fa-trash-can"></i>
            </button>`;

    todoCard.append(todoTitle, todoCategory);

    if (todoObject.status === "unfinished") {
      todoCard.classList.add("unfinished");
      todoContainerUnfinished.append(todoCard);
    } else {
      todoCard.classList.add("finished");
      todoCardContainerFinished.append(todoCard);
    }

    //Click on a todo to get the info

    todoCard.addEventListener("click", (e) => {
      if (e.target.innerHTML.includes("trash")) {
        console.log(e.target);
        showTodoInfo(todoObject);
      }
    });
  });
  // add eventlistener for removing todoCards start
  let removeBtns = document.querySelectorAll(".removeBtn");
  Array.from(removeBtns).forEach((removeBtn) => {
    removeBtn.addEventListener("click", () => {
      removeTodo(removeBtn);
    });
    // console.log(todoList);
  });
}

function showTodoInfo(todo) {
  let todoPopUp = document.createElement("div");
  todoPopUp.classList.add("todoOverviewPop");
  todoPopUp.style.zIndex = "99";

  let cardInfo = document.createElement("h2");
  cardInfo.innerText = "Your todo:";

  let todoTitle = document.createElement("input");
  todoTitle.type = "text";
  todoTitle.name = "todoTitle";
  todoTitle.value = `${todo.title}`;
  let todoTitleLabel = document.createElement("label");
  todoTitleLabel.innerText = "Todo title:";

  let todoDesc = document.createElement("input");
  todoDesc.type = "text";
  todoDesc.value = `${todo.desc}`;
  let todoDescLabel = document.createElement("label");
  todoDescLabel.innerText = "Todo Description:";

  let todoDeadline = document.createElement("input");
  todoDeadline.type = "date";
  todoDeadline.value = `${todo.deadline}`;

  let todoTimeEst = document.createElement("input");
  todoTimeEst.type = "number";
  todoTimeEst.value = `${todo.timeestimate}`;

  let todoCategory = document.createElement("p");
  todoCategory.innerText = `Current Category: ${todo.category}`;

  let todoReSelect = document.createElement("select");
  todoReSelect.name = "categoryChoice";
  todoReSelect.id = "categoryChoice";
  todoReSelect.innerHTML = `
  <option value="Choose one">Choose one</option>
  <option value="Home">Home</option>
  <option value="Training">Training</option>
  <option value="School">School</option>
  <option value="Chores">Chores</option>
  `;

  let todoStatus = document.createElement("p");
  todoStatus.innerText = `Status: ${todo.status}`;
  let btn = document.createElement("button");
  btn.classList.add("removeBtn");
  btn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

  let overLay = document.createElement("div");
  overLay.style.width = "100vw";
  overLay.style.height = "100%";
  overLay.style.zIndex = "10";
  overLay.style.position = "absolute";
  overLay.style.top = "0";
  overLay.style.left = "0";
  overLay.style.background = "rgba(0,0,0,0.4)";

  document.body.append(overLay);
  let editBtn = document.createElement("button");
  editBtn.classList.add("btn", "primary");
  editBtn.innerText = "Edit Todo?";

  todoPopUp.append(
    cardInfo,
    todoTitleLabel,
    todoTitle,
    todoDescLabel,
    todoDesc,
    todoDeadline,
    todoTimeEst,
    todoCategory,
    todoReSelect,
    todoStatus,
    editBtn,
    btn
  );
  let finishBtn = document.createElement("button");

  if (todo.status === "unfinished") {
    finishBtn.classList.add("btn", "secondary");
    finishBtn.innerText = "Finished?";
    todoPopUp.append(finishBtn);
  }

  contentContainer.append(todoPopUp);

  //Editng the Todo Card
  editBtn.addEventListener("click", () => {
    todo.title = todoTitle.value;
    todo.desc = todoDesc.value;
    todo.deadline = todoDeadline.value;
    todo.timeestimate = todoTimeEst.value;
    todo.category = todoReSelect.value;
    overLay.remove();
    saveTodoData();
    showTodos();
  });
  // Removing the overlay and popUp
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
    overLay.remove();
  });
  overLay.addEventListener("click", () => {
    btn.parentElement.remove();
    overLay.remove();
  });

  // Click to save Edited todos
  finishBtn.addEventListener("click", () => {
    todo.status = "finished";
    todo.desc = todoDesc.value;
    btn.parentElement.remove();
    overLay.remove();
    saveTodoData();
    showTodos();
  });
}

function filterOnTimes(list, value) {
  console.log(list, value);
  let newList = list;
  console.log(newList);

  if (value === "deadlineUp") {
    // Sort the list in deadline highest first
    newList.sort(function (a, b) {
      // Convert the date strings to Date objects
      let dateA = new Date(a.deadline);
      let dateB = new Date(b.deadline);
      // Subtract the dates to get a value that is either negative, positive, or zero
      return dateA - dateB;
    });
    printTodosOnPage(newList);
  } else if (value === "deadlineDown") {
    // Sort the list in deadline lowest first
    newList.sort(function (a, b) {
      // Convert the date strings to Date objects
      let dateA = new Date(a.deadline);
      let dateB = new Date(b.deadline);
      // Subtract the dates to get a value that is either negative, positive, or zero
      return dateB - dateA;
    });
    printTodosOnPage(newList);
  } else if (value === "timeUp") {
    // Sort with time highest first
    newList.sort((a, b) => a.timeestimate - b.timeestimate);
    printTodosOnPage(newList);
  } else if (value === "timeDown") {
    // SOrt time lowest first
    newList.sort((a, b) => b.timeestimate - a.timeestimate);
    printTodosOnPage(newList);
  }
  // console.log(newList);

  return newList;
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
  habitsTab.style.width = "110%";
  habitsTab.style.borderRadius = "0% 10% 10% 0%";

  contentContainer.innerHTML = `
  <div class="habitContainer">
    <div class="habitHeader">
        <h2>Your Habits</h2>
        <div className="filterHabits">
          <label for= "prioFilter"> Filter by priority: </label>
          <select name="prio" id="prioFilter">
          <option value="all"> All </option>
          <option value="high"> High </option>
          <option value="medium"> Medium </option>
          <option value="low"> Low </option>
          </select>
          <label for= "prioSort"> Sort by: </label>
          <select name="sort" id="prioSort">
          <option value="all"> All </option>
          <option value="highHabit"> Highest Habit Streak </option>
          <option value="lowestHabit"> Lowest Habit Streak </option>
          </select>
        </div>
        <button class="btn primary" onclick="createHabit()"><i class="fa-solid fa-plus"></i>Add Habits</button>
        

    </div>
    <div class="habitCardContainer">

    </div>
</div>
  `;
  //Se detta Simon HUX
  printHabitsOnPage(habitList);

  document.querySelector("#prioFilter").addEventListener("change", () => {
    filterPriorites(habitList, document.querySelector("#prioFilter").value);
  });

  document.querySelector("#prioSort").addEventListener("change", () => {
    sortPriorites(habitList, document.querySelector("#prioSort").value);
  });
}

function printHabitsOnPage(list) {
  let habitCardContainer = document.querySelector(".habitCardContainer");
  habitCardContainer.innerHTML = "";
  console.log(list);
  list.forEach((habitObject) => {
    console.log(habitObject);

    let habitCard = document.createElement("div");
    habitCard.classList.add("habitCard");

    let doneHabit = document.createElement("div");
    doneHabit.classList.add("doneHabit");
    doneHabit.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;

    let waitingHabit = document.createElement("div");
    waitingHabit.classList.add("waitingHabit");
    waitingHabit.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`;

    let habitTitle = document.createElement("p");
    habitTitle.innerText = habitObject.title;

    let habitCategory = document.createElement("p");
    habitCategory.innerText = habitObject.desc;

    let habitPrio = document.createElement("div");
    habitPrio.classList.add("habitPrio");
    if (habitObject.status === "high") {
      habitPrio.innerHTML = `<i class="fa-solid fa-bread-slice"></i> <i class="fa-solid fa-bread-slice"></i> <i class="fa-solid fa-bread-slice"></i>`;
    } else if (habitObject.status === "medium") {
      habitPrio.innerHTML = `<i class="fa-solid fa-bread-slice"></i> <i class="fa-solid fa-bread-slice"></i>`;
    } else {
      habitPrio.innerHTML = `<i class="fa-solid fa-bread-slice"></i>`;
    }

    habitCard.innerHTML += `
            <button class="removeBtn">
            <i class="fa-regular fa-trash-can"></i>
            </button>`;

    habitCard.style.backgroundImage = habitObject.background;

    if (habitObject.category === "Training") {
      habitCard.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else if (habitObject.category === "Mindfullness") {
      habitCard.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1621228720536-e27ba8f4d363?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else if (habitObject.category === "Cleaning") {
      habitCard.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1529220502050-f15e570c634e?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else {
      habitCard.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1610312856669-2cee66b2949c?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
    // console.log(habitObject.category);

    habitCard.append(
      habitTitle,
      habitCategory,
      doneHabit,
      waitingHabit,
      habitPrio
    );
    //varje gång vi skapar upp så kallar vi på habitCounter. för att inte behöva targeta i funktuionen habitcounter
    //CALLBACK 582
    habitCounter(habitCard, doneHabit, waitingHabit, habitObject);
    habitCardContainer.append(habitCard);
  });
  // add eventlistener for removing habitCards start
  let removeBtns = document.querySelectorAll(".removeBtn");
  Array.from(removeBtns).forEach((removeBtn) => {
    removeBtn.addEventListener("click", () => {
      removeHabit(removeBtn);
    });
    // console.log(todoList);
  });

  // selectPrios();
} // but here
// Functions for filter and sort habits - start
function filterPriorites(list, value) {
  console.log(list, value);
  let filterList = habitList.filter((object) => object.status == value);
  console.log(filterList);
  if (filterList.length) {
    printHabitsOnPage(filterList);
  } else {
    printHabitsOnPage(habitList);
  }
}
//Schmeckles are not here
function sortPriorites(list, value) {
  let sortList = list;
  if (value == "highHabit") {
    sortList.sort((a, b) => b.countNumber - a.countNumber);
    printHabitsOnPage(sortList);
  } else if (value == "lowestHabit") {
    sortList.sort((a, b) => a.countNumber - b.countNumber);
    printHabitsOnPage(sortList);
  }
}
// Functions for filter and sort habits - end
function showTimer() {
  //removing styles and content
  contentContainer.innerHTML = "";
  todoTab.removeAttribute("style");
  habitsTab.removeAttribute("style");
  homeTab.removeAttribute("style");
  calenderTab.removeAttribute("style");
  weatherTab.removeAttribute("style");
  //removing styles and content
  timerTab.style.width = "110%";
  timerTab.style.borderRadius = "0% 10% 10% 0%";
  contentContainer.innerHTML = `

  <div class="TimerContainer">
   <div class="TimerBox">
      <div class="setTime lato-bold">
        <label id= "timelabel" for="timeInput">Set time (minutes)</label> 
        <input type="number" id="timeInput" min="1" value="1" />
      </div>
      <div class="lato-bold" id="timer">00:00</div>
      <div>
        <button class="lato-bold" id="StartTimerbtn" onclick="startTimer()">Start</button>
        <button class="lato-bold" id="PauseTimerbtn" style="display: none" onclick="pauseTimer()">Pause</button>
        <button class="lato-bold" id="ResetTimerbtn" style="display: none" onclick="resetTimer()">Reset</button>
      </div>
    </div>
    </div>

  `;
}

function showLogout() {}

// Funktioner för sidorientering - End Frans

// Funktioner som genererar content- start
function createTodo() {
  contentContainer.innerHTML = "";

  contentContainer.innerHTML = `
  <div class="todoInfo">
  <div>
    <label for="whatTodo">What is your Todo?</label>
    <input
      type="text"
      name="whatTodo"
      id="whatTodo"
      placeholder="Write your todo!"
    />
  </div>
  <div>
    <label for="descTodo">Describe it</label>
    <input
      type="text"
      name="descTodo"
      id="descTodo"
      placeholder="Describe your todo"
    />
  </div>
  <div>
    <label for="deadlineTodo">Deadline?</label>
    <input type="date" name="deadlineTodo" id="deadlineTodo" />
  </div>
  <div>
    <label for="timeTodo">Time estimate?</label>
    <input
      type="number"
      name="timeTodo"
      id="timeTodo"
      placeholder="Write in minutes!"
    />
  </div>

  <div class="categoryInfoTodo">
    <label for="categoryChoice">Category</label>
    <select name="categoryChoice" id="categoryChoice">
      <option value="Choose one">Choose one</option>
      <option value="Home">Home</option>
      <option value="Training">Training</option>
      <option value="School">School</option>
      <option value="Chores">Chores</option>
    </select>
  </div>

  <div class="statusTodoInfo">
    <label for="unfinishedTodoChoice">Unfinished</label>
    <input type="radio" name="TodoChoice" id="unfinishedTodoChoice" value="unfinished" checked/>
    <label for="finishedTodoChoice">Finished</label>
    <input type="radio" name="TodoChoice" id="finishedTodoChoice" value="finished"/>
  </div>

  <button class="btn primary" id="saveBtn">Save</button>
</div>

  `;

  let categoryChoice = document.querySelector("#categoryChoice");
  console.log(categoryChoice);

  let saveBtn = document.querySelector("#saveBtn");

  saveBtn.addEventListener("click", () => {
    let todoObject = {};
    if (
      document.querySelector("#whatTodo").value &&
      document.querySelector("#descTodo").value &&
      document.querySelector("#deadlineTodo").value &&
      document.querySelector("#categoryChoice").value &&
      document.querySelector('input[name="TodoChoice"]:checked').value &&
      document.querySelector("#categoryChoice").value !== "Choose one"
    ) {
      todoObject.id = userName;
      todoObject.title = document.querySelector("#whatTodo").value;
      todoObject.desc = document.querySelector("#descTodo").value;
      todoObject.deadline = document.querySelector("#deadlineTodo").value;
      todoObject.timeestimate = document.querySelector("#timeTodo").value;
      todoObject.category = document.querySelector("#categoryChoice").value;
      todoObject.status = document.querySelector(
        'input[name="TodoChoice"]:checked'
      ).value;
      console.log(todoObject);
      todoList.push(todoObject);
      todoListUnfilter.push(todoObject);
      saveTodoData();
      alert("A new Todo has been added!");
      showTodos();
    } else {
      alert("Check to make sure all fields has been filled!");
    }
  });
}

function createHabit() {
  contentContainer.innerHTML = "";
  contentContainer.innerHTML = `
  <div class = "habitInfo">
  <div> 
    <label for="whatHabit"> What is your Habit:</label>
    <input
      type = "text"
      name = "whatHabit"
      id = "whatHabit"
      placeholder = "Write the title of your habit"
      />
    </div>
    <div>
      <label for="descHabit">Describe it:</label>
      <input
      type="text"
      name="descHabit"
      id="descHabit"
      placeholder="Describe your habit"
    />
  </div>

  <div class="categoryInfoHabit">
    <label for="categoryChoiceHabit">Habit type:</label>
    <select name="categoryChoiceHabit" id="categoryChoiceHabit">
      <option value="Choose one">Choose one</option>
      <option value="Training">Training</option>
      <option value="Mindfullness">Mindfullness</option>
      <option value="Cleaning">Cleaning</option>
      <option value="Ultra masculine workout for dudemen">Ultra masculine workout for dudemen</option>
    </select>
  </div>
    <div class="statusHabitInfo">
    <label for="highHabitChoice">High Priority <input type="radio" name="habitChoice" id="highHabitChoice" value="high" checked/></label>
    
    <label for="mediumHabitChoice">Medium Priority <input type="radio" name="habitChoice" id="mediumHabitChoice" value="medium"/></label>
    
    <label for="lowHabitChoice">Low Priority <input type="radio" name="habitChoice" id="lowHabitChoice" value="low"/></label>
    
  </div>
  <button class="btn primary" id="saveBtnHabit" >Save</button>
  `;

  // let categoryChoiceHabit = document.querySelector("#categoryChoiceHabit");

  let saveBtn = document.querySelector("#saveBtnHabit");

  saveBtn.addEventListener("click", () => {
    let habitObject = {};
    if (
      document.querySelector("#whatHabit").value &&
      document.querySelector("#descHabit").value &&
      document.querySelector("#categoryChoiceHabit").value &&
      document.querySelector('input[name="habitChoice"]:checked').value &&
      document.querySelector("#categoryChoiceHabit").value !== "Choose one"
    ) {
      habitObject.id = userName;
      habitObject.title = document.querySelector("#whatHabit").value;
      habitObject.desc = document.querySelector("#descHabit").value;
      habitObject.status = document.querySelector(
        'input[name="habitChoice"]:checked'
      ).value;
      habitObject.category = document.querySelector(
        "#categoryChoiceHabit"
      ).value;
      habitObject.countNumber = 0;
    }

    habitList.push(habitObject);
    habitListUnfilter.push(habitObject);
    saveHabitData();
    alert("A new Habit has been added");
    showHabits();

    console.log(habitObject, habitList);
  });
}

// Funktioner som genererar content- end

//Funktion som räknar habit streak -start
//CALLBACK 348

function habitCounter(habitCard, doneHabit, waitingHabit, habitObject) {
  let countDiv = document.createElement("div");
  countDiv.classList.add("countDiv");
  countDiv.innerHTML = `<i class="fa-brands fa-free-code-camp"></i>`;

  // let countNumber = 0;

  doneHabit.addEventListener("click", () => {
    habitObject.countNumber++;
    counter.innerText = habitObject.countNumber;
    saveHabitData();
    // localStorage.setItem(habitObject.id, countNumber);
    // console.log(countNumber);
  });
  waitingHabit.addEventListener("click", () => {
    if (habitObject.countNumber > 0) {
      habitObject.countNumber--;
      counter.innerText = habitObject.countNumber;
      saveHabitData();
      // localStorage.setItem(habitObject.id, countNumber);
    }
  });

  let counter = document.createElement("p");
  counter.innerText = habitObject.countNumber;
  counter.classList.add("counter");
  habitCard.append(countDiv, counter);
}

//Funktion som räknar habit streak -end

// Remove funktion för todoCards

function removeTodo(removeBtn) {
  todoList.forEach((todoObject) => {
    if (removeBtn.parentElement.innerHTML.includes(todoObject.title)) {
      let index = todoList.findIndex((todoObject) =>
        removeBtn.parentElement.innerHTML.includes(todoObject.title)
      );
      let indexUnf = todoList.findIndex((todoObject) =>
        removeBtn.parentElement.innerHTML.includes(todoObject.title)
      );
      todoList.splice(index, 1);
      todoListUnfilter.splice(indexUnf, 1);
      console.log(indexUnf);
      console.log(index, removeBtn.parentElement.innerHTML, todoObject.title);
    }
    removeBtn.parentElement.remove();
    // console.log(todoObject.index());
    saveTodoData();
  });
}
// Remove Funktion för todoCards end

// Remove funktion för habitCars

function removeHabit(removeBtn) {
  habitList.forEach((todoObject) => {
    console.log(todoObject.title, removeBtn.parentElement.innerHTML);
    if (removeBtn.parentElement.innerHTML.includes(todoObject.title)) {
      let index = habitList.findIndex((todoObject) =>
        removeBtn.parentElement.innerHTML.includes(todoObject.title)
      );
      console.log(index, removeBtn.parentElement.innerHTML, todoObject.title);
      habitList.splice(index, 1);
    }
    removeBtn.parentElement.remove();
    // console.log(todoObject.index());
    saveHabitData();
  });
}

// Remove Funktion för habitcards end

// Funktioner för att spara i Local Storage

function saveTodoData() {
  // console.log(todoList);
  localStorage.setItem("todoData", JSON.stringify(todoListUnfilter));
}

function getTodoData() {
  todoList = JSON.parse(localStorage.getItem("todoData"));
}

function saveHabitData() {
  localStorage.setItem("habitData", JSON.stringify(habitListUnfilter));
}

function getHabitData() {
  habitList = JSON.parse(localStorage.getItem("habitData"));
}

// getHabitData();
// getTodoData();
showHome();

