
//function setTemperature(event) {
  //event.preventDefault();
  //currentTemperature.innerHTML = "10°";
  //if (event.target.id == "fahrenheit") {
    //currentTemperature.innerHTML = "42°";
  //}
//}

//let fahrenheitLink = document.querySelector("#fahrenheit");
//fahrenheitLink.addEventListener("click", setTemperature);

//let celciusLink = document.querySelector("#celsius");
//celciusLink.addEventListener("click", setTemperature);


// week 5 -- In your project, when a user searches for a city (example: New York), 
//it should display the name of the city on the result page and the current temperature of the city.
//🙀 Bonus point:
//Add a Current Location button. When clicking on it, it uses the Geolocation API to get your GPS coordinates
// and display and the city and current temperature using the OpenWeather API.




//function showLocalTemperature(position) {
  //let lat = position.coords.latitude;
  //let lon = position.coords.longitude;
  //let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
  //let units = "metric";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  //axios.get(apiUrl).then(showTemperature);
//}



let dayElement = document.querySelector("#current-day");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let day = days[now.getDay()];
dayElement.innerHTML = `${day}`;

let timeElement = document.querySelector("#current-time");
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < "10") {
  minutes = `0${minutes}`;
}

timeElement.innerHTML = `${hours}:${minutes}`;


//Form request

function showTemperature(position) {
  console.log(position);
  let temp = Math.round(position.data.main.temp);
  let requestedTemperature = document.querySelector("#temperature");
  requestedTemperature.innerHTML = temp;
}

function searchCityData (city){
let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);
}

function submitSearchButton (event){
event.preventDefault();
let city = document.querySelector("#city");
let cityInput = document.querySelector ("#search-city-input");
city.innerHTML = cityInput.value;
searchCityData(cityInput.value);
}

let form =document.querySelector("#search-form");
form.addEventListener ("click", submitSearchButton);



// Local button

function showCity (position){
 console.log(position);
 let localeCity = position.data.name;
 let requestedCity = document.querySelector ("#city");
 requestedCity.innerHTML = localeCity;
}

function showLocalTemperature(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  axios.get(apiUrl).then(showCity);
}

function submitLocalButton (event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocalTemperature);
}

let local = document.querySelector ("#location-button");
local.addEventListener ("click", submitLocalButton);
