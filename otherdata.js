let block = document.querySelector("#main-block");
let max = document.querySelector("#max");
let min = document.querySelector("#min");
let date = document.querySelector("#date");
let tempNow = document.querySelector("#temp-now");
let land = document.querySelector("#land");
let wh = document.querySelector("#wh");
let des = document.querySelector("#des");
let errorBlock= document.querySelector('#error-block');

export function buildBlockError(){
  errorBlock.style.display="grid";
  errorBlock.innerHTML = "This location can not be found!"; 
  block.style.display="none";
}
export function buildBlock(result) {
  // display data field
  block.style.display = "grid";
  errorBlock.style.display="none";

  // define tableheads
  max.innerHTML = `<th>Max</th>`;
  min.innerHTML = `<th>Min</th>`;

  // filter img
  let imgLink = `https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/${result.list[0].weather[0].icon}@2x.png`;
  block.insertAdjacentHTML("afterbegin", `<img src=${imgLink}></img>`);

  // temperature now
  let tempNowRound = Math.round(result.list[0].main.temp);
  let fahrenheit = (tempNowRound * 9) / 5 + 32;
  tempNow.innerHTML = `${tempNowRound}C° | ${fahrenheit}°F`;

  // filter country
  land.innerHTML = `${result.city.name},${result.city.country}`;

  // filter wind/humidity
  let wUnits = ["m/s", "m/h"];
  wh.innerHTML = `<li> Wind: ${result.list[0].wind.speed} m/s
  </li> <li>Humidity: ${result.list[0].main.humidity}%</li>`;

  // filter description
  des.innerHTML = result.list[0].weather[0].description;

  // filter the data with time// 12:00
  for (let i = 0; i < result.list.length; i++) {
    // filter the dates for the table
    let dateTable = `${result.list[i].dt_txt.slice(8, 10)}/${result.list[
      i
    ].dt_txt.slice(5, 7)}`;
    
    // append tabledata
    let dayTime = result.list[i].dt_txt.split(" ")[1].slice(0, 2);
    let nightTime = result.list[i].dt_txt.split(" ")[1].slice(1, 2);
    if (result.list[0] && dayTime == 12) {
      let maxTemp = `${Math.round(result.list[i].main.temp_max)}°C`;
      max.innerHTML += `<td>${maxTemp}</td>`;
      if (date.getElementsByTagName("th").length < 5) {
        date.innerHTML += `<th> ${dateTable} </th>`;
      }
    } else if (nightTime == 0){
      let minTemp = `${Math.round(result.list[i].main.temp_min)}°C`;
      min.innerHTML += `<td>${minTemp}</td>`;
      }
  }
}

export function buildBlockImperial(result) {

  // display data field
  block.style.display = "grid";
  errorBlock.style.display="none";

  // define tableheads
  max.innerHTML = `<th>Max</th>`;
  min.innerHTML = `<th>Min</th>`;

  // filter img
  let imgLink = `https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/${result.list[0].weather[0].icon}@2x.png`;
  block.insertAdjacentHTML("afterbegin", `<img src=${imgLink}></img>`);

  // temperature now
  let tempNowRound = Math.round(result.list[0].main.temp);
  let celcius = ((tempNowRound - 32) * 5) / 9;
  tempNow.innerHTML = `${tempNowRound}°F | ${Math.round(celcius)}°C`;

  // filter country
  land.innerHTML = `${result.city.name},${result.city.country}`;

  // filter wind/humidity
  wh.innerHTML = `<li> Wind: ${result.list[0].wind.speed} m/h
  </li> <li>Humidity: ${result.list[0].main.humidity}%</li>`;

  // filter description
  des.innerHTML = result.list[0].weather[0].description;

  // filter the data with time// 12:00
  for (let i = 0; i < result.list.length; i++) {
    // filter the dates for the table
    let dateTable = `${result.list[i].dt_txt.slice(8, 10)}/${result.list[
      i
    ].dt_txt.slice(5, 7)}`;

    // append tabledata
    let dayTime = result.list[i].dt_txt.split(" ")[1].slice(0, 2);
    let nightTime = result.list[i].dt_txt.split(" ")[1].slice(1, 2);
    if (result.list[0] && dayTime == 12) {
      let maxTemp = `${Math.round(result.list[i].main.temp_max)}°F`;
      max.innerHTML += `<td>${maxTemp}</td>`;
      if (date.getElementsByTagName("th").length < 5) {
        date.innerHTML += `<th> ${dateTable} </th>`;
      }} else if (nightTime == 0){
        let minTemp = `${Math.round(result.list[i].main.temp_min)}°F`;
        min.innerHTML += `<td>${minTemp}</td>`;
        }
    
  }
}