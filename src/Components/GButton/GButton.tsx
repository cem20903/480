import React from "react";

import "./GButton.css";

type Props = {
	children: string | JSX.Element | JSX.Element[];
	onClick?: () => void;
	type: "submit" | "button";
	disabled?: boolean;
	mode?: string;
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
			className={`button-${mode} button`}
		>
			{children}
		</button>
	);
}
export default GButton;
