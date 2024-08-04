
type Weather = [{ dt: number, dt_txt: string, weather: [{ icon: string }], main: { temp_max: number, temp_min: number, temp: number } }]


function filterByDate(weatherList: Weather) {

  const weatherListWithFormatedDate = weatherList.map(weatherItem => {

    const currentDate = new Date(weatherItem.dt * 1000)
    currentDate.setHours(0, 0, 0, 0)

    return {
      ...weatherItem,
      date: currentDate
    }
  })
  return weatherListWithFormatedDate.filter(weatherItem => {

    const today = new Date()
    today.setHours(0, 0, 0, 0)


    return weatherItem.date.getTime() === today.getTime()
  })
}

function formatWeatherList(weatherList: Weather) {

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







function getWeather(city: string) {
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&mode=json`)
    .then((response) => response.json())
    .then((response) => {
      return formatWeatherList(response.list)
    });
}





export { getWeather }
