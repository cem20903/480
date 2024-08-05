import React from "react";
import { useTranslation } from "react-i18next";

import "./menu.css";
import GButton from "../GButton/GButton";

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
					<GButton
						type='button'
						onClick={() => setIsLogued(false)}
					>
						Cerrar Sesion
					</GButton>
				)}
				<GButton
					type='button'
					onClick={() => changeLanguage("es")}
				>
					ES
				</GButton>
				<GButton
					type='button'
					onClick={() => changeLanguage("en")}
				>
					EN
				</GButton>
			</div>
		</header>
	);
}

export default Menu;
