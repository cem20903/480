import weatherRepository from "./weatherRepository";

function getWeatherByCity(city: string, lang: string) {
  return weatherRepository.fetchWeather(city, lang);
}

export { getWeatherByCity };
