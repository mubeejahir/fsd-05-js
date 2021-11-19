function difference() {
  //TODO: Find days, hours, minutes, seconds between date2 & date1
   // Find the distance between now and the count down date
   let  now= new Date().getTime(); //current date & Time
   let countDownDate = new Date("dec 1, 2021 11:00:00").getTime();

   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);
  document.querySelector('.days').innerHTML = days;
  document.querySelector('.hours').innerHTML = hours;
  document.querySelector('.minutes').innerHTML = minutes;
  document.querySelector('.seconds').innerHTML = seconds;
}

//targetDate();
//currentMoment();
//how to call a function in regular interval
setInterval(difference, 1000);
