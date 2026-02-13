const apiKey = "c66814fff80a4ad608d630b8c84fb737";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
checkWeather();