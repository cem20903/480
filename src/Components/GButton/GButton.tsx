import React from "react";

import "./GButton.css";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	onClick?: () => void;
	type: "submit" | "button";
	disabled?: boolean;
	mode?: "primary" | "warning";
};

function GButton({
	children,
	onClick,
	type,
	disabled,
	mode = "primary",
}: Props) {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={`button button-${mode}`}
		>
			{children}
		</button>
	);
}
export default GButton;
