
type WeatherList = [
  { dt: number, dt_txt: string, weather: [{ icon: string, description: string }], main: { temp_max: number, temp_min: number, temp: number } }
]


type WeatherListFormated = {
  date: string;
  icon: string;
  maxTemp: number;
  minTemp: number;
  currentTemp: number;
  description: string
}[];



export type { WeatherList, WeatherListFormated }
