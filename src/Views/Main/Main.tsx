import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Login/Login";
import Weather from "../Weather/Weather";
import { useSelector } from "react-redux";
import { isLogued } from "../../store/userSlice";

function Main() {
	const isCurrentLogued = useSelector(isLogued);
	const [city, setCity] = useState("");

	return (
		<div className='container'>
			{isCurrentLogued && <Sidebar setCity={setCity} />}
			{!isCurrentLogued && <Login />}
			{isCurrentLogued && <Weather city={city} />}
		</div>
	);
}

export default Main;
