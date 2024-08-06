import React from "react";
import { Link } from "react-router-dom";

import GButton from "../GButton/GButton";
import { useTranslation } from "react-i18next";
import "./sidebar.css";

const CITIES = ["London", "Toronto", "Singapur"];

type SidebarProps = {
	setCity: (string: string) => void;
};

function Sidebar({ setCity }: SidebarProps) {
	const { t } = useTranslation();

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
			<Link to='/contact'>{t("contact")}</Link>
		</div>
	);
}

export default Sidebar;
