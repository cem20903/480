
type WeatherList = [
  { dt: number, dt_txt: string, weather: [{ icon: string }], main: { temp_max: number, temp_min: number, temp: number } }
]


type WeatherListFormated = {
  date: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  currentTemp: number;
}[];



export type { WeatherList, WeatherListFormated }
