import React from "react";

import "./menu.css";

function Menu({ isLogued }: { isLogued: boolean }) {
	return (
		<header>
			<div className='menu'>
				{isLogued && <span>Cerrar Sesion</span>}
				<span>ES</span>
				<span>EN</span>
			</div>
		</header>
	);
}

export default Menu;
