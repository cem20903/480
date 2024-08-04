import React from "react";

import "./sidebar.css";
import { Link } from "react-router-dom";

const CITIES = ["London", "Toronto", "Singapur"];

type SidebarProps = {
	setCity: (string: string) => void;
};

function Sidebar({ setCity }: SidebarProps) {
	return (
		<div className='sidebar'>
			<div>
				{CITIES.map((city) => {
					return (
						<button
							key={city}
							onClick={() => setCity(city)}
						>
							{city}
						</button>
					);
				})}
			</div>
			<Link to='/contact'>Contacto</Link>
		</div>
	);
}

export default Sidebar;
