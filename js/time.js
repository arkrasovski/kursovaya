const welcome = document.querySelector(".time .greeting");
console.log(welcome);
const message = ", уважаемый пользователь!";
function hello() {
  var timer = new Date();
  var timer_hours = timer.getHours();

  if (timer_hours >= 18 && timer_hours < 24) {
    welcome.innerHTML = "Добрый вечер" + message;
  } else if (timer_hours > 6 && timer_hours < 12) {
    welcome.innerHTML = "Доброе утро" + message;
  } else if (timer_hours > 12 && timer_hours < 18) {
    welcome.innerHTML = "Добрый день" + message;
  } else if (timer_hours >= 0 && timer_hours < 6) {
    welcome.innerHTML = "Доброй ночи" + message;
  }
}
hello();
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");

function timer() {
  var time = new Date();
  var time_hours = time.getHours();
  var time_min = time.getMinutes();
  hours.innerHTML = (time_hours < 10 ? "0" : "") + time_hours;
  minutes.innerHTML = (time_min < 10 ? "0" : "") + time_min;
}

setInterval("timer();", 1000);
