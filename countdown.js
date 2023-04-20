var countDownDate = new Date("June 2, 2023 00:00:00").getTime(); // Hier einfach das Datum eingeben :D

var x = setInterval(function() {

  var now = new Date().getTime();
  
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Mio ist jetzt 18!"; // Nachricht, wenn der Timer abgelaufen ist ^^
  }
}, 1000);
