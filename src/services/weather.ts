import { isToday, transformDateFromUnixTimestamp } from "../utils/dates"

type Weather = [{ dt: number, dt_txt: string, weather: [{ icon: string }], main: { temp_max: number, temp_min: number, temp: number } }]

function filterByDate(weatherList: Weather) {
  const weatherListWithFormatedDate = weatherList.map(weatherItem => {
    const currentDate = transformDateFromUnixTimestamp(weatherItem.dt)
    return {
      ...weatherItem,
      date: currentDate
    }
  })
  return weatherListWithFormatedDate.filter(weatherItem => isToday(weatherItem.date))
}

function weatherListFormated(weatherList: Weather) {

  const currentWeather = filterByDate(weatherList)


  const currentWeatherFormted = currentWeather.map(weather => {

    return {
      date: weather.dt_txt,
      icon: weather.weather[0].icon,
      maxTemp: weather.main.temp_max,
      minTemp: weather.main.temp_min,
      currentTemp: weather.main.temp
    }
  })

  return currentWeatherFormted
}


const URL = 'https://api.openweathermap.org/data/2.5/forecast'

function getWeather(city: string) {
  return fetch(`${URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&mode=json`)
    .then((response) => response.json())
    .then((response) => {
      return weatherListFormated(response.list)
    });
}


export { getWeather }
