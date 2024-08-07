import { language } from "../../types";
import weatherRepository from "./weatherRepository";

function getWeatherByCity(city: string, lang: language | string) {
  return weatherRepository.fetchWeather(city, lang);
}

export { getWeatherByCity };
