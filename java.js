function search(event) {
  event.preventDefault();
  let selectorInput = document.querySelector("#selector-name");

  let h1 = document.querySelector("h1");
  if (selectorInput.value) {
    h1.innerHTML = `${selectorInput.value}`;
  } else {
    h1.innerHTML = null;
    alert("Please type a city");
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

h3.innerHTML = `${day} ${hours}:${minutes}, moderate rain `;

function displayTemperature(response) {
  console.log(response.data);
  let h2 = document.querySelector("h2");
  let currentTemperature = Math.round(response.data.temperature.current);
  h2.innerHTML = `${response.data.condition.description} ${currentTemperature}°C`;
}
let key = "1ot98b2ad3d954b0b49d73e7b5f48b43";
let city = "Sydney";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;

axios.get(apiUrl).then(displayTemperature);

