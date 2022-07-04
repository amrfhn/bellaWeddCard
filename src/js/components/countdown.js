//============= birtday countdown
const weddingDate = new Date("08/22/2022"); // set birthday 
const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
const days = 24 * hours;
const timer = setInterval(updateTimer, seconds);

function updateTimer() {
  const today = new Date();
  const diffrence = weddingDate - today;
//   if (diffrence <= -days) {
//     document.querySelector("h2").innerHTML = "Had a nice Birthday";
//     clearInterval(timer);
//     return;
//   } else if (diffrence <= 0) {
//     document.querySelector("h2").innerHTML = "Happy Birthday!";
//     clearInterval(timer);
//     return;
//   }
  //=========== get day hours minutes seconds
  const d = Math.floor(diffrence / days);
  const h = Math.floor((diffrence % days) / hours);
  const m = Math.floor((diffrence % hours) / minutes);
  const s = Math.floor((diffrence % minutes) / seconds);
  document.querySelector("#day").textContent = d;
  document.querySelector("#hour").textContent = h;
  document.querySelector("#minute").textContent = m;
  document.querySelector("#second").textContent = s;
}
