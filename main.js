
import { clockTicking } from "./date.js";
import {
  buildBlock,
  buildBlockImperial,
  buildBlockError
} from "./otherdata.js";

let input = document.querySelector('[type="text"]');
let checkBox = document.querySelector('[type="checkbox"]');
let unit = "metric";

// calling clock function and repeat the calling every second
setInterval(clockTicking, 1000);

// remove default text from input textfield when active
input.addEventListener("click", e => {
  e.target.removeAttribute("value");
});

function start() {
  clockTicking();
  let link = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=${unit}&APPID=3bc7d9fa9147ed9fcd0e449c0bfd2fca`;
  // fetch
  fetch(link)
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      if (unit === "metric") {
        buildBlock(result);
      } else if (unit === "imperial") {
        buildBlockImperial(result);
      }
    })
    .catch(error => {
      console.log(error);
      input.value = "";
      buildBlockError();
      return result;
    });
}

// add event to input textfield - press enter
input.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    if (input.value === "") {
      location.reload();
    }
    e.preventDefault();
    start();
  }
});

// url toggle Celcius/Fahrenheit
checkBox.addEventListener("change", e=>{
if (!checkBox.checked) {
    unit = "metric";
    if (input.value !== "Enter your city..." && input.value !== "") {
      start();
    }}
  else if (checkBox.checked) {
    unit = "imperial";
    if (input.value !== "Enter your city..." && input.value !== "") {
      start();
    }
  }
});
