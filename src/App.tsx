import React, { useState } from "react";

import "./App.css";
import Menu from "./Components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import Contact from "./Views/Contact/Contact";
import Main from "./Views/Main/Main";

function App() {
	const [isLogued, setIsLogued] = useState(false);

	return (
		<div>
			<Menu
				isLogued={isLogued}
				setIsLogued={setIsLogued}
			/>
			<Routes>
				<Route
					path='/'
					element={<Main />}
				/>
				<Route
					path='contact'
					element={<Contact />}
				/>
			</Routes>
		</div>
	);
}

export default App;
