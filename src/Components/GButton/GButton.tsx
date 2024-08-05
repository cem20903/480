import React from "react";

import "./GButton.css";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	onClick?: () => void;
	type: "submit" | "button";
};

function GButton({ children, onClick, type }: Props) {
	return (
		<button
			onClick={onClick}
			type={type}
			className='button'
		>
			{children}
		</button>
	);
}
export default GButton;
