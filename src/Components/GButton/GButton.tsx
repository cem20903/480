import React from "react";

import "./GButton.css";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	onClick?: () => void;
	type: "submit" | "button";
	disabled?: boolean;
};

function GButton({ children, onClick, type, disabled }: Props) {
	return (
		<button
			onClick={onClick}
			type={type}
			className='button'
			disabled={disabled}
		>
			{children}
		</button>
	);
}
export default GButton;
