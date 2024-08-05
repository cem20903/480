import React, { useEffect, useState } from "react";
import { getWeather } from "../../services/weather";

import "./weather.css";
import { WeatherListFormated } from "../../types";

type WeatherProps = {
	city: string;
};

function Weather({ city }: WeatherProps) {
	const [weatherList, setWeatherList] = useState<WeatherListFormated>([
		{ date: "", icon: "", maxTemp: 0, minTemp: 0, currentTemp: 0 },
	]);

	useEffect(() => {
		if (!city) {
			return;
		}
		getWeather(city).then((response: any) => {
			setWeatherList(response);
		});
	}, [city]);

	return (
		<div>
			<h3>VISTA EL TIEMPO: {city}</h3>
			<div className='weather-container'>
				{!city && (
					<div>
						<span>Selecciona una ciudad para ver su clima</span>
					</div>
				)}
				{city &&
					weatherList.map((weatherByHour, index) => {
						return (
							<div
								className='weather-day'
								key={index}
							>
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
