import { isToday, transformDateFromUnixTimestamp } from "../../../utils/dates"
import { WeatherList } from "../../../types"

function filterByDate(weatherList: WeatherList) {
  const weatherListWithFormatedDate = weatherList.map(weatherItem => {
    const currentDate = transformDateFromUnixTimestamp(weatherItem.dt)
    return {
      ...weatherItem,
      date: currentDate
    }
  })
  return weatherListWithFormatedDate.filter(weatherItem => isToday(weatherItem.date))
}

function formatWeatherList(weatherList: WeatherList) {

  const currentWeather = filterByDate(weatherList)

  const currentWeatherFormted = currentWeather.map(weather => {
    return {
      date: weather.dt_txt,
      icon: weather.weather[0].icon,
      maxTemp: weather.main.temp_max,
      minTemp: weather.main.temp_min,
      currentTemp: weather.main.temp,
      description: weather.weather[0].description
    }
  })

  return currentWeatherFormted
}


export default formatWeatherList
