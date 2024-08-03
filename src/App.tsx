import React, { useState } from "react";

import "./App.css";
import Login from "./Views/Login/Login";
import Menu from "./Components/Menu/Menu";
import Sidebar from "./Components/Sidebar/Sidebar";
import Weather from "./Views/Weather/Weather";

function App() {
	const [isLogued, setIsLogued] = useState(false);

	return (
		<div>
			<Menu isLogued={isLogued} />
			<div className='container'>
				{isLogued && <Sidebar />}
				{!isLogued && <Login setIsLogued={setIsLogued} />}
				{isLogued && <Weather />}
			</div>
		</div>
	);
}

export default App;
