import React, { useEffect, useState } from "react";
import { getWeather } from "../../services/weather";

import "./weather.css";

type Weather = [
	{
		date: string;
		icon: string;
		maxTemp: number;
		minTemp: number;
		currentTemp: number;
	}
];

function Weather({ city }: { city: string }) {
	const [weatherList, setWeatherList] = useState<Weather>([
		{ date: "", icon: "", maxTemp: 0, minTemp: 0, currentTemp: 0 },
	]);

	useEffect(() => {
		getWeather(city).then((response: any) => {
			setWeatherList(response);
		});
	}, [city]);

	return (
		<div>
			<h3>VISTA EL TIEMPO: {city}</h3>
			<div className='weather-container'>
				{weatherList.map((weatherByHour) => {
					return (
						<div className='weather-day'>
							<div>{weatherByHour.date}</div>
							<div>
								<img
									src={`http://openweathermap.org/img/wn/${weatherByHour.icon}.png`}
									alt='Weather Icon'
								/>
							</div>
							<div>Temperatura Maxima: {weatherByHour.maxTemp}</div>
							<div>Temperatura Minima: {weatherByHour.minTemp}</div>
							<div>Temperatura Actual: {weatherByHour.currentTemp}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Weather;
