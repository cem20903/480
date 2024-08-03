import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Login from "../Login/Login";
import Weather from "../Weather/Weather";

type MainProps = {
	setIsLogued: (boolean: boolean) => void;
	isLogued: boolean;
};

function Main({ isLogued, setIsLogued }: MainProps) {
	return (
		<div className='container'>
			{isLogued && <Sidebar />}
			{!isLogued && <Login setIsLogued={setIsLogued} />}
			{isLogued && <Weather />}
		</div>
	);
}

export default Main;
