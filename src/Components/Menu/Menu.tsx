import React from "react";

import "./menu.css";

function Menu({
	isLogued,
	setIsLogued,
}: {
	isLogued: boolean;
	setIsLogued: (boolean: boolean) => void;
}) {
	return (
		<header>
			<div className='menu'>
				{isLogued && (
					<button onClick={() => setIsLogued(false)}>Cerrar Sesion</button>
				)}
				<span>ES</span>
				<span>EN</span>
			</div>
		</header>
	);
}

export default Menu;
