import formatWeatherList from "./adapters/formatWeatherList";

const URL = 'https://api.openweathermap.org/data/2.5/forecast'

function getWeather(city: string) {
  return fetch(`${URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&mode=json`)
    .then((response) => response.json())
    .then((response) => {
      return formatWeatherList(response.list)
    });
}


export { getWeather }
