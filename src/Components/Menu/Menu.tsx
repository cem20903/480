import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { isLogued } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { setIsLogued } from "../../store/userSlice";
import es from "../../assets/flags/es.png";
import en from "../../assets/flags/en.png";

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
				<span className='menu--title'>Prueba 480</span>
				<div className='menu--buttons'>
					{isCurrentLogued && (
						<GButton
							type='button'
							mode='warning'
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
						<img
							src={es}
							className='menu--flag'
							alt='idioma español'
						/>
					</GButton>
					<GButton
						type='button'
						onClick={() => changeLanguage("en")}
					>
						<img
							src={en}
							className='menu--flag'
							alt='idioma ingles'
						/>
					</GButton>
				</div>
			</div>
		</header>
	);
}

export default Menu;
