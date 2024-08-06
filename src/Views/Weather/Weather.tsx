import React, { useEffect, useState } from "react";
import { getWeather } from "../../services/weather/weather";
import { useTranslation } from "react-i18next";

import "./weather.css";
import { WeatherListFormated } from "../../types";

type WeatherProps = {
	city: string;
};

function Weather({ city }: WeatherProps) {
	const [weatherList, setWeatherList] = useState<WeatherListFormated | []>([]);

	const { t } = useTranslation();

	useEffect(() => {
		if (!city) {
			return;
		}
		getWeather(city).then((response: WeatherListFormated) => {
			setWeatherList(response);
		});
	}, [city]);

	return (
		<div>
			<div className='weather-container'>
				{!city && (
					<div>
						<h2>{t("selectCity")}</h2>
					</div>
				)}
				{city && (
					<>
						<h3>
							{t("climateOf")} {city}
						</h3>
						<div className='weather-view'>
							{weatherList.length > 0 &&
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
											<div>
												{t("tempMax")}: {weatherByHour.maxTemp}
											</div>
											<div>
												{t("tempMin")}: {weatherByHour.minTemp}
											</div>
											<div>
												{t("currentTemp")}: {weatherByHour.currentTemp}
											</div>
										</div>
									);
								})}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Weather;
