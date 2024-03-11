// -_- Mr Sure

function showCalender() {
  //removing styles and content
  let sessionUser = sessionStorage.getItem('NameUser');
  let userName = sessionUser ? sessionUser : 'failed';
  contentContainer.innerHTML = '';
  todoTab.removeAttribute('style');
  habitsTab.removeAttribute('style');
  timerTab.removeAttribute('style');
  homeTab.removeAttribute('style');
  weatherTab.removeAttribute('style');
  //removing styles and content
  calenderTab.style.width = '110%';
  calenderTab.style.borderRadius = '0% 10% 10% 0%';

  let calenderContainer = document.createElement('div');
  calenderContainer.classList.add('containerCalender');

  let calenderHead = document.createElement('div');
  calenderHead.classList.add('headerCalender');

  let monthShow = document.createElement('div');
  monthShow.id = 'month';

  let btnDiv = document.createElement('div');

  let btnBack = document.createElement('button');
  btnBack.classList.add('buttonCalender');
  btnBack.id = 'btnBack';
  btnBack.innerHTML = `<i class="fa fa-angle-left"></i>`;
  let btnNext = document.createElement('button');
  btnNext.classList.add('buttonCalender');
  btnNext.id = 'btnNext';
  btnNext.innerHTML = `<i class="fa fa-angle-right"></i>`;

  btnDiv.append(btnBack, btnNext);
  calenderHead.append(monthShow, btnDiv);

  let dayContainer = document.createElement('div');
  dayContainer.classList.add('weekdays');
  let sunday = document.createElement('div');
  sunday.innerText = 'Sun';
  let monday = document.createElement('div');
  monday.innerText = 'Mon';
  let tuesday = document.createElement('div');
  tuesday.innerText = 'Tue';
  let wednesday = document.createElement('div');
  wednesday.innerText = 'Wed';
  let thursday = document.createElement('div');
  thursday.innerText = 'Thu';
  let friday = document.createElement('div');
  friday.innerText = 'Fri';
  let saturday = document.createElement('div');
  saturday.innerText = 'Sat';

  dayContainer.append(
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
  );

  let calender = document.createElement('div');
  calender.id = 'something';

  let modals = document.createElement('div');
  modals.id = 'modal';

  let addEvent = document.createElement('div');
  addEvent.id = 'addEvent';
  let addEventh2 = document.createElement('h2');
  addEventh2.innerText = 'Add Event';
  let addEventInput = document.createElement('input');
  addEventInput.type = 'text';
  addEventInput.id = 'txtTitle';
  addEventInput.placeholder = 'Event Title';
  let timeBox = document.createElement('div');
  timeBox.id = 'timeBox';
  let addEventStartTime = document.createElement('input');
  addEventStartTime.type = 'time';
  addEventStartTime.id = 'eventStartTime';
  let addEventStopTime = document.createElement('input');
  addEventStopTime.type = 'time';
  addEventStopTime.id = 'eventStopTime';
  timeBox.append(addEventStartTime, addEventStopTime);
  let saveBtn = document.createElement('button');
  saveBtn.id = 'btnSave';
  saveBtn.innerText = 'Save';
  let closeBtn = document.createElement('button');
  closeBtn.classList.add('btnClose');
  closeBtn.innerText = 'Close';

  addEvent.append(addEventh2, addEventInput, timeBox, saveBtn, closeBtn);

  let viewEvent = document.createElement('div');
  viewEvent.id = 'viewEvent';
  let viewEventH2 = document.createElement('h2');
  // viewEventH2.innerText = 'Event';
  let eventText = document.createElement('p');
  eventText.id = 'eventText';
  eventText.innerText = 'This is a Sample';
  let eventTime = document.createElement('p');
  eventTime.id = 'eventTime';
  let deleteBtn = document.createElement('button');
  deleteBtn.id = 'btnDelete';
  deleteBtn.innerText = 'Delete Event';
  let closeBtn2 = document.createElement('button');
  closeBtn2.classList.add('btnClose');
  closeBtn2.innerText = 'Close';

  viewEvent.append(viewEventH2, eventText, eventTime, deleteBtn, closeBtn2);

  calenderContainer.append(
    calenderHead,
    dayContainer,
    calender,
    modals,
    addEvent,
    viewEvent
  );

  contentContainer.append(calenderContainer);

  let dt = new Date();

  let calendar = document.querySelector('#something');
  let monthBanner = document.querySelector('#month');
  let navigation = 0;
  let clicked = null;
  let eventsAll = localStorage.getItem('events')
    ? JSON.parse(localStorage.getItem('events'))
    : [];
  let events = eventsAll.filter((event) => event.id === userName);
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function loadCalendar() {
    if (navigation != 0) {
      dt.setMonth(new Date().getMonth() + navigation);
      console.log(dt);
    } else {
      dt.setMonth(new Date().getMonth());
    }

    console.log(navigation);
    let day = dt.getDate();
    let month = dt.getMonth();
    let year = dt.getFullYear();
    console.log(day, month, year);
    monthBanner.innerText = `${dt.toLocaleDateString('en-us', {
      month: 'long',
    })} ${year}`;
    console.log(calendar, modal);
    calendar.innerHTML = '';
    let dayInMonth = new Date(year, month + 1, 0).getDate();
    let firstDayofMonth = new Date(year, month, 1);
    let dateText = firstDayofMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    let dayString = dateText.split(', ')[0];
    console.log(dayString);
    let emptyDays = weekdays.indexOf(dayString);
    console.log(emptyDays);

    for (let i = 1; i <= dayInMonth + emptyDays; i++) {
      let dayBox = document.createElement('div');
      dayBox.classList.add('day');
      let monthVal = month + 1 < 10 ? '0' + (month + 1) : month + 1;
      let dateVal = i - emptyDays < 10 ? '0' + (i - emptyDays) : i - emptyDays;
      let dateText = `${dateVal}-${monthVal}-${year}`;
      if (i > emptyDays) {
        dayBox.innerText = i - emptyDays;
        //Event Day
        let eventOfTheDay = events.find((e) => e.date == dateText);

        if (i - emptyDays === day && navigation == 0) {
          dayBox.id = 'currentDay';
        }

        if (eventOfTheDay) {
          let eventDiv = document.createElement('div');
          let eventTime = document.createElement('div');
          eventTime.innerText = `${eventOfTheDay.start} - ${eventOfTheDay.stop}`;
          eventDiv.classList.add('event');
          eventDiv.innerText = eventOfTheDay.title;
          eventDiv.append(eventTime);
          dayBox.appendChild(eventDiv);
        }
        dayBox.addEventListener('click', () => {
          showModal(dateText);
        });
      } else {
        dayBox.classList.add('plain');
      }
      calendar.append(dayBox);
    }
  }

  function buttons() {
    let btnBack = document.querySelector('#btnBack');
    let btnNext = document.querySelector('#btnNext');
    let btnDelete = document.querySelector('#btnDelete');
    btnDelete.classList.add('btn');
    let btnSave = document.querySelector('#btnSave');
    btnSave.classList.add('btn');
    let closeButtons = document.querySelectorAll('.btnClose');
    closeButtons.forEach((btn) => {
      btn.classList.add('btn');
    });
    let txtTitle = document.querySelector('#txtTitle');
    let startTime = document.querySelector('#eventStartTime');
    let stopTime = document.querySelector('#eventStopTime');

    btnBack.addEventListener('click', () => {
      navigation--;
      loadCalendar();
    });
    btnNext.addEventListener('click', () => {
      navigation++;
      loadCalendar();
    });
    modal.addEventListener('click', closeModal);
    closeButtons.forEach((btn) => {
      btn.addEventListener('click', closeModal);
    });
    btnDelete.addEventListener('click', function () {
      console.log(events);
      events = events.filter((e) => e.date !== clicked);
      console.log(events);
      eventsAll = eventsAll.filter(
        (e) => e.date !== clicked || e.id !== userName
      );
      console.log(eventsAll);

      localStorage.setItem('events', JSON.stringify(eventsAll));
      closeModal();
    });

    btnSave.addEventListener('click', function () {
      if (
        txtTitle.value &&
        startTime.value &&
        stopTime.value &&
        startTime.value < stopTime.value
      ) {
        txtTitle.classList.remove('error');
        eventsAll.push({
          id: userName,
          date: clicked,
          title: txtTitle.value.trim(),
          start: startTime.value,
          stop: stopTime.value,
        });
        events.push({
          id: userName,
          date: clicked,
          title: txtTitle.value.trim(),
          start: startTime.value,
          stop: stopTime.value,
        });
        txtTitle.value = '';
        localStorage.setItem('events', JSON.stringify(eventsAll));
        closeModal();
      } else {
        txtTitle.classList.add('error');
        startTime.classList.add('error');
        stopTime.classList.add('error');
      }
    });
  }

  let modal = document.querySelector('#modal');
  let viewEventForm = document.querySelector('#viewEvent');
  let addEventForm = document.querySelector('#addEvent');

  function showModal(dateText) {
    clicked = dateText;
    let eventOfTheDay = events.find((e) => e.date == dateText);
    if (eventOfTheDay) {
      //Event already Preset
      document.querySelector('#eventText').innerText = eventOfTheDay.title;
      document.querySelector(
        '#eventTime'
      ).innerText = `Start: ${eventOfTheDay.start} - End: ${eventOfTheDay.stop}`;
      viewEventForm.style.display = 'flex';
    } else {
      //Add new Event
      addEventForm.style.display = 'flex';
    }
    modal.style.display = 'block';
  }
  //Close Modal
  function closeModal() {
    viewEventForm.style.display = 'none';
    addEventForm.style.display = 'none';
    modal.style.display = 'none';
    clicked = null;
    loadCalendar();
  }

  /*
  1. Add Event     
  3. Update Local Storage
  */
  loadCalendar();
  buttons();
}

