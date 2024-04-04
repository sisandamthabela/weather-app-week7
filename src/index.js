function updateTime() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  let formattedDayAndTime = `${day}, ${hour}:${minute
    .toString()
    .padStart(2, "0")}`;
  let currentTime = document.querySelector("#day-time");
  currentTime.innerHTML = formattedDayAndTime;
}

setInterval(updateTime, 1000);

function updateWeather(response) {
  let currentLocation = document.querySelector("#current-city");
  let temp = document.querySelector("#current-temp");
  let descriptionElement = document.querySelector("#condition");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let feelsLike = document.querySelector("#feels-like");
  let icon = document.querySelector("#icon");

  currentLocation.innerHTML = `${response.data.city}`;
  temp.innerHTML = `${Math.round(response.data.temperature.current)}`;
  descriptionElement.innerHTML = response.data.condition.description;
  console.log(response);
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  feelsLike.innerHTML = `Feels like ${Math.round(
    response.data.temperature.feels_like
  )}°`;
  icon.innerHTML = `<img src ="${response.data.condition.icon_url}"/>`;
}
function searchCity(city) {
  let apiKey = "7a60d36485to64ac27f9bab0d1cc4ca3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
searchCity("Ixopo");
