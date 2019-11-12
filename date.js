let w = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday"
];

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function clockTicking() {
  var d = new Date();
  let day = d.getDay();
  let clock = document.querySelector("#clock");
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  clock.innerHTML = w[day] + " " + h + ":" + m + ":" + s;
}