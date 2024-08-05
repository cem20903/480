import React from "react";

import "./sidebar.css";
import { Link } from "react-router-dom";

import GButton from "../GButton/GButton";

const CITIES = ["London", "Toronto", "Singapur"];

type SidebarProps = {
	setCity: (string: string) => void;
};

function Sidebar({ setCity }: SidebarProps) {
	return (
		<div className='sidebar'>
			<div className='sidebar--cities'>
				{CITIES.map((city) => {
					return (
						<GButton
							type='button'
							key={city}
							onClick={() => setCity(city)}
						>
							{city}
						</GButton>
					);
				})}
			</div>
			<Link to='/contact'>Contacto</Link>
		</div>
	);
}

export default Sidebar;
