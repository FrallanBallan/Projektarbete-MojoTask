//Login - createAccount start - Angelo divarna;
//Login - createAccount start - Angelo
//divarna
let LoginForm = document.querySelector('.Login-form');
let CreateForm = document.querySelector('.CreateAccount-form');
//knapparna
let BtnToCreate = document.querySelector('#CreateBtn');
let CreateAccountBtn = document.querySelector('#CreateAccountBtn');
let AlreadyAccountBtn = document.querySelector('#alredyaccount');

let LoggainBtn = document.querySelector('#LoginBtn');
//inputs
let Newuser = document.querySelector('#Createusername');
let NewLösen = document.querySelector('#Createpassword');
let RepeatLösen = document.querySelector('#repeatpassword');
let Namn = document.querySelector('#username');
let Lösenord = document.querySelector('#password');
//objekt users som lagrar alla users
let users = {};
//felmeddelande p-tagar
let p = document.querySelector('#error');
let felmessage = document.querySelector('.felmeddelande');
//nollställer alla inputs fält och tagar
function NollställLogin() {
  //nollställer inputsfälten
  Newuser.value = '';
  NewLösen.value = '';
  RepeatLösen.value = '';
  Namn.value = '';
  Lösenord.value = '';
  p.innerText = '';
  felmessage.innerText = '';
  RepeatLösen.classList.remove('errorInput');
}
//funktionen som öppnar upp create-form och gömmer login-form
function LoginClose() {
  LoginForm.classList.add('hidden');
  LoginForm.classList.remove('focuss');

  CreateForm.classList.add('focus');
  CreateForm.classList.remove('hidden');
  NollställLogin();
}
//funktionen som öppnar tillbaka Login och stänger create
function LoginOpen() {
  LoginForm.classList.add('focuss');
  LoginForm.classList.remove('hidden');

  CreateForm.classList.remove('focus');
  CreateForm.classList.add('hidden');
  NollställLogin();
}
//knappen som man går till CreateAccountform för att skapa ett konto
BtnToCreate.addEventListener('click', () => {
  LoginClose();
});
//knappen som man skapar ett konto på
CreateAccountBtn.addEventListener('click', () => {
  LoginOpen();
  //om lösen input och reapeatlösen input matchar gå vidare
  if (NewLösen.value === RepeatLösen.value) {
    if (
      //om användarnamnetin har onödiga mellanslag i sig ta bort dom trim()
      Newuser.value.trim() !== '' &&
      NewLösen.value.trim() !== '' &&
      //kolla så att users inte redan har ett value med samma användarnamn value
      !users.hasOwnProperty(Newuser.value)
    ) {
      //spara i localstorage
      users[Newuser.value] = NewLösen.value;
      localStorage.setItem('users', JSON.stringify(users));
      LoginOpen();
      //annars skriv ut felmeddelande
    } else {
      felmessage.innerText = 'Användarnamn upptaget eller fältet tomt!';
    }
    //annars om lösenorden inte matchar varandra skriv ut error meddelande
  } else {
    RepeatLösen.classList.add('errorInput');
    felmessage.innerText = 'Lösenordet matchar inte';
  }
});
//knappen jag har redan ett konto stänger createAccount och öppnar login
AlreadyAccountBtn.addEventListener('click', () => {
  LoginOpen();
});

LoggainBtn.addEventListener('click', () => {
  //hämtar sessionstorage med keyn alla users och lägger in detta i en variabel
  let storedUsers = JSON.parse(localStorage.getItem('users'));
  //om storedUsers hadownpropery(kollar så att objektet innehåller en specifik egenskap såg den kollar om storeduser innehåller likadant användarnamn som användaren har stoppat in i inputen)
  if (
    storedUsers.hasOwnProperty(Namn.value) &&
    storedUsers[Namn.value] === Lösenord.value
  ) {
    console.log('hej');
    NollställLogin();
  } else {
    //misslyckades att logga in
    p.innerText = 'Felaktigt användarnamn eller lösenord!';
  }
});

// Login - CreateAccount End Angelo

// Funktioner för sidorientering - Start Frans

// Globals

let contentContainer = document.querySelector('.contentContainer');
let homeTab = document.querySelector('#homeTab');
let todoTab = document.querySelector('#todoTab');
let habitsTab = document.querySelector('#habitsTab');
let timerTab = document.querySelector('#timerTab');
let calenderTab = document.querySelector('#calenderTab');
let weatherTab = document.querySelector('#weatherTab');

// Global Arrays
let todoList = []; // JSON.parse(localStorage.getItem('links'));

function showHome() {
  //removing styles and content
  contentContainer.innerHTML = '';
  todoTab.removeAttribute('style');
  habitsTab.removeAttribute('style');
  timerTab.removeAttribute('style');
  calenderTab.removeAttribute('style');
  weatherTab.removeAttribute('style');
  //removing styles and content

  homeTab.style.width = '110%';
  homeTab.style.borderRadius = '0% 10% 10% 0%';

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
  <div class="todoOverview">
    <h3>Todo's overview</h3>
    <ul class="overviewList todo">
   
    </ul>
    <button class="btn primary" onclick="showTodos()">See all</button>
  </div>
  <div class="habitOverview">
    <h3>Habits overview</h3>
    <ul class="overviewList habits">
      <li>Something</li>
      <li>Something</li>
      <li>Something</li>
      <li>Something</li>
      <li>Something</li>
    </ul>
    <button class="btn primary" onclick="showHabits()">See all</button>
  </div>
</div>
  `;
  // Render li from todoList and show on home page -start
  let todoUl = document.querySelector('.overviewList');
  todoList.forEach((todo) => {
    console.log(todo);

    let todoLi = document.createElement('li');
    todoLi.innerText = todo.title;
    todoUl.append(todoLi);
  });
  // Render li from todoList and show on home page -end
  NollställLogin();
}

function showTodos() {
  //removing styles and content
  contentContainer.innerHTML = '';
  homeTab.removeAttribute('style');
  habitsTab.removeAttribute('style');
  timerTab.removeAttribute('style');
  calenderTab.removeAttribute('style');
  weatherTab.removeAttribute('style');
  //removing styles and content
  todoTab.style.width = '110%';
  todoTab.style.borderRadius = '0% 10% 10% 0%';
  contentContainer.innerHTML = `
  <div class="homeTodoTab">
  <h2>Your todo's</h2>
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

  let todoContainerUnfinished = document.querySelector(
    '#todoContainerUnfinished'
  );
  let todoCardContainerFinished = document.querySelector(
    '#todoCardContainerFinished'
  );

  // Print the todo Cards from todoList that gets from local storage start

  todoList.forEach((todoObject) => {
    //New Verson
    let todoCard = document.createElement('div');
    todoCard.classList.add('card');
    let todoTitle = document.createElement('p');
    todoTitle.innerText = todoObject.title;
    let todoCategory = document.createElement('div');
    todoCategory.classList.add('todoCategory');
    if (todoObject.category === 'Home') {
      todoCategory.innerHTML = `<i class="fa-solid fa-house"></i>`;
    } else if (todoObject.category === 'School') {
      todoCategory.innerHTML = `<i class="fa-solid fa-school"></i>`;
    } else if (todoObject.category === 'Training') {
      todoCategory.innerHTML = `<i class="fa-solid fa-dumbbell"></i>`;
    } else {
      todoCategory.innerHTML = `<i class="fa-solid fa-hand-sparkles"></i>`;
    }

    todoCard.innerHTML += `
    <button class="removeBtn">
    <i class="fa-regular fa-trash-can"></i>
    </button>`;

    todoCard.append(todoTitle, todoCategory);

    if (todoObject.status === 'unfinished') {
      todoCard.classList.add('unfinished');
      todoContainerUnfinished.append(todoCard);
    } else {
      todoCard.classList.add('finished');
      todoCardContainerFinished.append(todoCard);
    }
  });
  // Print the todo Cards from todoList that gets from local storage end

  // add eventlistener for removing todoCards start
  let removeBtns = document.querySelectorAll('.removeBtn');

  Array.from(removeBtns).forEach((removeBtn) => {
    removeBtn.addEventListener('click', () => {
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
    });
    // console.log(todoList);
  });

  // add eventlistener for removing todoCards end
}

function showHabits() {
  //removing styles and content
  contentContainer.innerHTML = '';
  todoTab.removeAttribute('style');
  homeTab.removeAttribute('style');
  timerTab.removeAttribute('style');
  calenderTab.removeAttribute('style');
  weatherTab.removeAttribute('style');
  //removing styles and content
  habitsTab.style.width = '110%';
  habitsTab.style.borderRadius = '0% 10% 10% 0%';

  contentContainer.innerHTML = `
  <div class="habitContainer">
    <div class="habitHeader">
        <h2>Your Habits</h2>
        <button class="btn primary"><i class="fa-solid fa-plus"></i>Add Habits</button>
    </div>
    <div class="habitCardContainer">
        <div class="habitCard">
            <h3>Habit?</h3>
            <h4>Uncompleted</h4>
        </div>
        <div class="habitCard">
            <h3>Habit?</h3>
            <h4>Uncompleted</h4>
        </div>
        <div class="habitCard">
            <h3>Habit?</h3>
            <h4>Uncompleted</h4>
        </div>
        <div class="habitCard">
            <h3>Habit?</h3>
            <h4>Uncompleted</h4>
        </div>

    </div>
</div>
  `;
}

function showTimer() {
  //removing styles and content
  contentContainer.innerHTML = '';
  todoTab.removeAttribute('style');
  habitsTab.removeAttribute('style');
  homeTab.removeAttribute('style');
  calenderTab.removeAttribute('style');
  weatherTab.removeAttribute('style');
  //removing styles and content
  timerTab.style.width = '110%';
  timerTab.style.borderRadius = '0% 10% 10% 0%';
  let test = document.createElement('h1');
  test.innerHTML = 'estoy testo timer';

  contentContainer.append(test);
}

function showCalender() {
  //removing styles and content
  contentContainer.innerHTML = '';
  todoTab.removeAttribute('style');
  habitsTab.removeAttribute('style');
  timerTab.removeAttribute('style');
  homeTab.removeAttribute('style');
  weatherTab.removeAttribute('style');
  //removing styles and content
  calenderTab.style.width = '110%';
  calenderTab.style.borderRadius = '0% 10% 10% 0%';
  let test = document.createElement('h1');
  test.innerHTML = 'estoy testo caldendoro';

  contentContainer.append(test);
}

function showWeather() {
  //removing styles and content
  contentContainer.innerHTML = '';
  todoTab.removeAttribute('style');
  habitsTab.removeAttribute('style');
  timerTab.removeAttribute('style');
  calenderTab.removeAttribute('style');
  homeTab.removeAttribute('style');
  //removing styles and content
  weatherTab.style.width = '110%';
  weatherTab.style.borderRadius = '0% 10% 10% 0%';
  let test = document.createElement('h1');
  test.innerHTML = 'estoy testo hace calor?';

  contentContainer.append(test);
}

function showLogout() {}

// Funktioner för sidorientering - End Frans

// Funktioner som genererar content- start
function createTodo() {
  contentContainer.innerHTML = '';

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

  let categoryChoice = document.querySelector('#categoryChoice');
  console.log(categoryChoice);

  let saveBtn = document.querySelector('#saveBtn');

  saveBtn.addEventListener('click', () => {
    let todoObject = {};
    if (
      document.querySelector('#whatTodo').value &&
      document.querySelector('#descTodo').value &&
      document.querySelector('#deadlineTodo').value &&
      document.querySelector('#categoryChoice').value &&
      document.querySelector('input[name="TodoChoice"]:checked').value &&
      document.querySelector('#categoryChoice').value !== 'Choose one'
    ) {
      todoObject.id = 'testPerson';
      todoObject.title = document.querySelector('#whatTodo').value;
      todoObject.desc = document.querySelector('#descTodo').value;
      todoObject.deadline = document.querySelector('#deadlineTodo').value;
      todoObject.category = document.querySelector('#categoryChoice').value;
      todoObject.status = document.querySelector(
        'input[name="TodoChoice"]:checked'
      ).value;
      console.log(todoObject);
      todoList.push(todoObject);
      saveTodoData();
      alert('A new Todo has been added!');
      showTodos();
    } else {
      alert('Check to make sure all fields has been filled!');
    }
  });
}

// Funktioner som genererar content- end

// Remove funktion för todoCards

function removeTodo() {
  console.log(this.parent);
}

// Remove Funktion för todoCards end

// Funktioner för att spara i Local Storage

function saveTodoData() {
  // console.log(todoList);
  localStorage.setItem('todoData', JSON.stringify(todoList));
}

function getTodoData() {
  todoList = JSON.parse(localStorage.getItem('todoData'));
}

getTodoData();
showHome();
