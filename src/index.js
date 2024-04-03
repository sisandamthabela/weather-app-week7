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
  let descriptionElement = document.querySelector("#condition");
  descriptionElement.innerHTML = response.data.condition.description;
  console.log(response);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let location = searchInput.value;

  let key = "7a60d36485to64ac27f9bab0d1cc4ca3";
  let url = `https://api.shecodes.io/weather/v1/current?query=${location}&key=${key}&units=metric`;
  axios.get(url).then(updateWeather);
}
let searchForm = document.querySelector("#search-button");
searchForm.addEventListener("submit", search);
searchLocation = "Paris";
