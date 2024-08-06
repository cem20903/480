import weatherRepository from "./weatherRepository";

function getWeather(city: string, lang: string) {
  return weatherRepository.fetchWeather(city, lang);
}

export { getWeather };
