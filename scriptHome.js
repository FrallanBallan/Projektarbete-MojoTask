// -_-

// Globals
let habitContainer = document.querySelector(".habitCardContainer");
let contentContainer = document.querySelector(".contentContainer");
let homeTab = document.querySelector("#homeTab");
let todoTab = document.querySelector("#todoTab");
let habitsTab = document.querySelector("#habitsTab");
let timerTab = document.querySelector("#timerTab");
let calenderTab = document.querySelector("#calenderTab");
let weatherTab = document.querySelector("#weatherTab");

// Global Arrays
let localTodos = localStorage.getItem("todoData");
let todoList = localTodos ? JSON.parse(localTodos) : []; // JSON.parse(localStorage.getItem('links'));

let localHabits = localStorage.getItem("habitData");
let habitList = localHabits ? JSON.parse(localHabits) : [];

function showHome() {
  //removing styles and content
  // contentContainer.innerHTML = '';
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
  
  <div class="homeCard">
    <i class="fa-solid fa-pen-to-square"></i>
  </div>
  <div class="homeCard">
    <i class="fa-solid fa-person-praying"></i>
  </div>
  <div class="homeCard">
    <h3 class="montserrat-heading">Todays Weather</h3>
    <div class="weatherIcon">
      <i class="fa-solid fa-cloud-sun-rain"></i>
    </div>
    <h4 class="montserrat-heading">Temperture:</h4>
    <h4 class="montserrat-heading">Location:</h4>
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

  //   let todoContainerUnfinished = document.querySelector(
  //     '#todoContainerUnfinished'
  //   );
  //   let todoCardContainerFinished = document.querySelector(
  //     '#todoCardContainerFinished'
  //   );

  let filterTodosContainer = document.querySelector(".todoTitleFilter");

  // Print the todo Cards from todoList that gets from local storage start

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
  filterTodosContainer.append(filterContainer);
}

// Render when filterd on category

function renderFilterdSearch(filterArray) {
  console.log(filterArray);
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
    //   }
    // });

    //New Verson
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
        <button class="btn primary" onclick="createHabit()"><i class="fa-solid fa-plus"></i>Add Habits</button>
    </div>
    <div class="habitCardContainer">

    </div>
</div>
  `;

  let habitCardContainer = document.querySelector(".habitCardContainer");
  console.log(habitList);

  habitList.forEach((habitObject) => {
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
        "url('https://images.unsplash.com/photo-1611800065908-233b597db552?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else if (habitObject.category === "Cleaning") {
      habitCard.style.backgroundImage =
        "url('https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    } else {
      habitCard.style.backgroundImage =
        "url('https://images.unsplash.com/photo-1610312856669-2cee66b2949c?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    }
    console.log(habitObject.category);

    habitCard.append(habitTitle, habitCategory, doneHabit, waitingHabit);
    //varje gång vi skapar upp så kallar vi på habitCounter. för att inte behöva targeta i funktuionen habitcounter
    //CALLBACK 582
    habitCounter(habitCard, doneHabit, waitingHabit);
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
  timerTab.style.width = "110%";
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
  calenderTab.style.width = "110%";
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
  weatherTab.style.width = "110%";
  weatherTab.style.borderRadius = "0% 10% 10% 0%";
  let test = document.createElement("h1");
  test.innerHTML = "estoy testo hace calor?";

  contentContainer.append(test);
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
      todoObject.id = "testPerson";
      todoObject.title = document.querySelector("#whatTodo").value;
      todoObject.desc = document.querySelector("#descTodo").value;
      todoObject.deadline = document.querySelector("#deadlineTodo").value;
      todoObject.category = document.querySelector("#categoryChoice").value;
      todoObject.status = document.querySelector(
        'input[name="TodoChoice"]:checked'
      ).value;
      console.log(todoObject);
      todoList.push(todoObject);
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
    <label for="categoryChoice">Habit type:</label>
    <select name="categoryChoiceHabit" id="categoryChoiceHabit">
      <option value="Choose one">Choose one</option>
      <option value="Training">Training</option>
      <option value="Mindfullness">Mindfullness</option>
      <option value="Cleaning">Cleaning</option>
      <option value="Ultra masculine workout for dudemen">Ultra masculine workout for dudemen</option>
    </select>
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
      document.querySelector("#categoryChoiceHabit").value !== "Choose one"
    ) {
      habitObject.name = "Habit Data Name";
      habitObject.title = document.querySelector("#whatHabit").value;
      habitObject.desc = document.querySelector("#descHabit").value;
      habitObject.category = document.querySelector(
        "#categoryChoiceHabit"
      ).value;
      habitObject.countNumber = 0;
      habitObject.id = Date.now().toString();
    }

    habitList.push(habitObject);
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

  let countNumber = 0;

  // let countNumber = 0;

  doneHabit.addEventListener("click", () => {
    countNumber++;
    counter.innerText = countNumber;
    console.log(countNumber);
  });
  waitingHabit.addEventListener("click", () => {
    if (countNumber > 0) {
      countNumber--;
      counter.innerText = countNumber;
    }
  });

  let counter = document.createElement("p");
  counter.innerText = countNumber;
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
      todoList.splice(index, 1);
    }
    removeBtn.parentElement.remove();
    // console.log(todoObject.index());
    saveTodoData();
  });
}
function removeHabit(removeBtn) {
  habitList.forEach((todoObject) => {
    if (removeBtn.parentElement.innerHTML.includes(todoObject.title)) {
      let index = habitList.findIndex((todoObject) =>
        removeBtn.parentElement.innerHTML.includes(todoObject.title)
      );
      habitList.splice(index, 1);
    }
    removeBtn.parentElement.remove();
    // console.log(todoObject.index());
    saveHabitData();
  });
}

// Remove Funktion för todoCards end

// Funktioner för att spara i Local Storage

function saveTodoData() {
  // console.log(todoList);
  localStorage.setItem("todoData", JSON.stringify(todoList));
}

function getTodoData() {
  todoList = JSON.parse(localStorage.getItem("todoData"));
}

function saveHabitData() {
  localStorage.setItem("habitData", JSON.stringify(habitList));
}

function getHabitData() {
  habitList = JSON.parse(localStorage.getItem("habitData"));
}

// getHabitData();
// getTodoData();
showHome();
