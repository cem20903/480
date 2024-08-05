import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { isLogued } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { setIsLogued } from "../../store/userSlice";

import "./menu.css";
import GButton from "../GButton/GButton";

function Menu() {
	const { i18n } = useTranslation();
	const isCurrentLogued = useSelector(isLogued);

	function changeLanguage(lang: string) {
		i18n.changeLanguage(lang);
	}

	const dispacth = useDispatch();

	return (
		<header>
			<div className='menu'>
				{isCurrentLogued && (
					<GButton
						type='button'
						onClick={() => {
							dispacth(setIsLogued(false));
						}}
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
