var birthdayString = "02.06.2005"; // Hier das Geburtsdatum im Format "dd.MM.yyyy" angeben

function addLeadingZero(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

function calculateNextBirthday(birthday) {
  var today = new Date();
  var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (nextBirthday < today) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  return nextBirthday;
}

function calculateAge(birthday) {
  var today = new Date();
  var age = today.getFullYear() - birthday.getFullYear();
  var monthDiff = today.getMonth() - birthday.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return age;
}

var birthday = new Date();
var parts = birthdayString.split('.');
birthday.setFullYear(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));

var nextBirthday = calculateNextBirthday(birthday);
var age = calculateAge(birthday);


var countdown = setInterval(function() {
  var now = new Date().getTime();
  var distance = nextBirthday - now;

  var days, hours, minutes, seconds;

  document.getElementById("birthday").innerHTML = birthdayString;

  var today = new Date();
  if (today.getDate() == birthday.getDate() && today.getMonth() == birthday.getMonth()) {
    days = addLeadingZero(0);
    hours = addLeadingZero(0);
    minutes = addLeadingZero(0);
    seconds = addLeadingZero(0);
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Mio ist heute " + age + " Jahre alt geworden!"; // Nachricht, wenn der Timer abgelaufen ist ^^
  } else {
    days = addLeadingZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
    hours = addLeadingZero(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minutes = addLeadingZero(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    seconds = addLeadingZero(Math.floor((distance % (1000 * 60)) / 1000));
    document.getElementById("countdown").innerHTML = age+1;
  }

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
