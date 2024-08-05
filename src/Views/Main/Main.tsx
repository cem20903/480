import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Login/Login";
import Weather from "../Weather/Weather";
import { useSelector } from "react-redux";
import { isLogued } from "../../store/userSlice";

function Main() {
	const isCurrentLogued = useSelector(isLogued);
	const [city, setCity] = useState("");

	if (isCurrentLogued) {
		return (
			<div className='container'>
				<Sidebar setCity={setCity} />
				<Weather city={city} />
			</div>
		);
	}

	return (
		<div className='container'>
			<Login />
		</div>
	);
}

export default Main;
