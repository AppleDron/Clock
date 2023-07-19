// const boxEl = document.querySelector(".js-box");
// const timer = document.querySelector(".js-timer");
// let counter = 11;

// setTimeout(() => {
//   boxEl.style.display = "block";
//   const id = setInterval(() => {
//     counter -= 1;
//     timer.textContent = counter;

//     if (!counter) {
//       clearInterval(id);
//       timer.textContent = "Пропустити рекламу";
//       timer.style.cursor = "pointer";
//       timer.addEventListener("click", onClick);
//     }
//   }, 1000);
// }, 1000);

// function onClick() {
//   boxEl.style.display = "none";
// }

const day = document.querySelector(".date-day");
const date = document.querySelector(".date");
const month = document.querySelector(".date-month");
const year = document.querySelector(".date-year");

const digitalClock = document.querySelector(".digital-clock");
const arrowSeconds = document.querySelector(".clock-seconds__arrow");
const arrowMinutes = document.querySelector(".clock-minutes__arrow");
const arrorHours = document.querySelector(".clock-hours__arrow");

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
const namesOfDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];

setInterval(() => {
  const currentTime = new Date();
  const currentDay = namesOfDay[currentTime.getDay()];
  const currentDate = currentTime.getDate();
  const currentMonth = namesOfMonth[currentTime.getMonth()];
  const currentYear = currentTime.getFullYear();
  const currentHour = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const changeSeconds = (360 / 60) * currentSeconds;
  const changeMinutes = (360 / 60) * currentMinutes;
  const changeHours =
    (360 / 12) * currentHour + (360 / 12 / 60) * currentMinutes;

  const formatTime = `${currentHour
    .toString()
    .padStart(2, "0")} : ${currentMinutes
    .toString()
    .padStart(2, "0")} : ${currentSeconds.toString().padStart(2, "0")}`;

  day.textContent = currentDay;
  date.textContent = currentDate;
  month.textContent = currentMonth;
  year.textContent = currentYear;

  digitalClock.textContent = `Поточний час: ${formatTime}`;

  arrowSeconds.style.transform = `rotate(${changeSeconds}deg)`;
  arrowMinutes.style.transform = `rotate(${changeMinutes}deg)`;
  arrorHours.style.transform = `rotate(${changeHours}deg)`;
}, 1000);
