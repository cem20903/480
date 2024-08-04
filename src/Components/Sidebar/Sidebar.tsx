import React from "react";

import "./sidebar.css";

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
			<span>Contacto</span>
		</div>
	);
}

export default Sidebar;
