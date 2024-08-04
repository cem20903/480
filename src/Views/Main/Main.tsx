import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Login/Login";
import Weather from "../Weather/Weather";

type MainProps = {
	setIsLogued: (boolean: boolean) => void;
	isLogued: boolean;
};

function Main({ isLogued, setIsLogued }: MainProps) {
	const [city, setCity] = useState("");

	return (
		<div className='container'>
			{isLogued && <Sidebar setCity={setCity} />}
			{!isLogued && <Login setIsLogued={setIsLogued} />}
			{isLogued && <Weather city={city} />}
		</div>
	);
}

export default Main;
