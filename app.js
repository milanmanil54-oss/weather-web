const apiKey = "c66814fff80a4ad608d630b8c84fb737";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  const weatherMain = String(data.weather[0].main).trim();
  console.log('Weather main:', weatherMain);

  if (weatherMain === "Clouds"){
    weatherIcon.src = "images/clouds.png";
  }
  else if (weatherMain === "Clear"){
    weatherIcon.src = "images/sun.png";
  }
  else if(weatherMain === "Rain"){
    weatherIcon.src = "images/Rainy.png"
  }
  else if(weatherMain === "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
  }
  else if (weatherMain === "Mist"){
    weatherIcon.src = "images/mist.png"
  }
  else if (weatherMain === "Snow"){
    weatherIcon.src = "images/snow.png"
  }
  
}

searchBtn.addEventListener("click", ()=> {
  checkWeather(searchBox.value);
})
