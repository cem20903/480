import Menu from "./Components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import Contact from "./Views/Contact/Contact";
import Main from "./Views/Main/Main";

function App() {
	return (
		<div>
			<Menu />
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
