import React from "react";
import { useTranslation } from "react-i18next";

import "./menu.css";

function Menu({
	isLogued,
	setIsLogued,
}: {
	isLogued: boolean;
	setIsLogued: (boolean: boolean) => void;
}) {
	const { i18n } = useTranslation();

	function changeLanguage(lang: string) {
		i18n.changeLanguage(lang);
	}

	return (
		<header>
			<div className='menu'>
				{isLogued && (
					<button onClick={() => setIsLogued(false)}>Cerrar Sesion</button>
				)}
				<button onClick={() => changeLanguage("es")}>ES</button>
				<button onClick={() => changeLanguage("en")}>EN</button>
			</div>
		</header>
	);
}

export default Menu;
