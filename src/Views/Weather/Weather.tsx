import { useEffect, useState } from "react";
import { getWeatherByCity } from "../../services/weather/weather";
import { useTranslation } from "react-i18next";

import "./weather.scss";
import { WeatherListFormated } from "../../types";
import { formatDate } from "../../utils/dates";

type WeatherProps = {
	city: string;
};

function Weather({ city }: WeatherProps) {
	const [weatherList, setWeatherList] = useState<WeatherListFormated | []>([]);

	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (!city) {
			return;
		}
		getWeatherByCity(city, i18n.language).then(
			(response: WeatherListFormated) => {
				setWeatherList(response);
			}
		);
	}, [city, i18n.language]);

	return (
		<div>
			<div className='weather--container'>
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
						<div className='weather--view'>
							{weatherList.length > 0 &&
								weatherList.map((weatherByHour, index) => {
									return (
										<div
											className='weather--day'
											key={index}
										>
											<div>
												<span>
													{formatDate(weatherByHour.date, i18n.language)}
												</span>
											</div>
											<div>
												<img
													src={`http://openweathermap.org/img/wn/${weatherByHour.icon}.png`}
													alt='Weather Icon'
												/>
											</div>
											<div>
												<span className='weahter--title'>
													{t("description")}:
												</span>
												<span> {weatherByHour.description}</span>
											</div>
											<div className='weather--temp'>
												<span className='weahter--title'>{t("tempMax")}: </span>
												<span>{weatherByHour.maxTemp}º</span>
											</div>
											<div className='weather--temp'>
												<span className='weahter--title'>{t("tempMin")}: </span>
												<span>{weatherByHour.minTemp}º</span>
											</div>
											<div>
												<p>{t("currentTemp")}:</p>
												<p className='weather--current'>
													{weatherByHour.currentTemp}º
												</p>
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
