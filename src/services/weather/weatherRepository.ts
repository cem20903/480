import formatWeatherList from "./adapters/formatWeatherList";

const URL = 'https://api.openweathermap.org/data/2.5/forecast';

class WeatherRepository {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async fetchWeather(city: string, lang: string): Promise<any> {
    const response = await fetch(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&mode=json&lang=${lang}&units=metric`);

    const data = await response.json();
    return formatWeatherList(data.list);
  }
}

const weatherRepository = new WeatherRepository(URL, process.env.REACT_APP_WEATHER_API || '');

export default weatherRepository;
