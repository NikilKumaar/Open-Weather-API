// Here i'm using async and await keyword for to fetching details from Api.

let getWeatherData = async () => {
  let apiKey = "ca6ee2915aa74d8c34aef478df56136b";
  let city = document.getElementById("city").value;
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
    let data = await response.json();

  // Using try and catch instead of .then() and catch() block.

  try {
    let weather = document.getElementById("weather");
      weather.innerHTML = `<br><h1>City :- ${data.name}</h1>
        <h2>Country :- ${data.sys.country}</h2>
        <h2>Temperature :- MIN - ${data.main.temp_min}K , MAX - ${data.main.temp_max}K , AVG - ${data.main.temp}K</h2>
        <h2>Feels like :- ${data.main.feels_like}K</h2>
        <h2>Humidity :- ${data.main.humidity}%</h2>
        <h2>Pressure :- ${data.main.pressure}hPa</h2>
        <h2>Ground Level :- ${data.main.grnd_level}hPa</h2>
        <h2>Sea Level :- ${data.main.sea_level}hPa</h2>
        <h2>Coordinates :- lat - ${data.coord.lat}deg , lon - ${data.coord.lon}deg</h2>
        <h2>Weather :- ${data.weather[0].description}</h2>
        <h2>Wind :- Degree - ${data.wind.deg} degree , Gust - ${data.wind.gust}m/s , Speed - ${data.wind.speed}m/s</h2>`;
  } catch (error) {
    alert(`Error fetching weather data.${error}`);
  }
};
