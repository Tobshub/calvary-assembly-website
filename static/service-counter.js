const daysEl = document.getElementById('days');
const dayTag = document.getElementById('days-tag');
const hoursEl = document.getElementById('hours');
const hourTag = document.getElementById('hours-tag');
const minutesEl = document.getElementById('minutes');
const minuteTag = document.getElementById('minutes-tag');
const secondsEl = document.getElementById('seconds');
const secondTag = document.getElementById('seconds-tag');

window.onload = () => {
  let interval = setInterval(updateDate, 1000);
}


function updateDate() {
  let today = new Date();

  let n = today.getDate();
  let i = n + 1;
  while (i < n + 7) {
      let check = new Date();
      check.setDate(i);
      if (check.getDay() == 0 || check.getDay() == 2) {
          break; 
      }
      i++;
  }
  let countTo = new Date();
  if (countTo.getDay() == 0) {
    countTo.setHours(8, 00, 0);
  } else {
    countTo.setHours(18, 0, 0);
  }


  let countDown = countTo.getTime() - today.getTime(); 

  let cd = new Date(countDown);
  let days = i - n - 1;
  if (days == 1) {
    dayTag.textContent = 'Day';
  } else {
    dayTag.textContent = 'Days';
  }

  let hours = (cd.getHours() < 10)? '0' + cd.getHours() : cd.getHours();
  let mins = (cd.getMinutes() < 10)? '0' + cd.getMinutes() : cd.getMinutes();
  let secs = (cd.getSeconds() < 10) ? '0' + cd.getSeconds() : cd.getSeconds();

  // console.log(days, hours, mins, secs);
  // countDownEl.textContent = `${days} days : ${hours} hours : ${mins} minutes : ${secs} seconds`;
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = mins;
  secondsEl.textContent = secs;
}

