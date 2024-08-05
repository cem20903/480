import React from "react";

import "./GInput.css";

type Props = {
	value: string | number;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	label: string;
	disabled?: boolean;
	placeholder?: string;
	type: string;
	required?: boolean;
	minLength?: number;
};

function GInput({
	label,
	name,
	onChange,
	value,
	disabled,
	placeholder,
	type,
	required,
	minLength,
}: Props) {
	return (
		<label className='gInput'>
			{label}
			<input
				className='gInput__input'
				name={name}
				aria-label={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
				placeholder={placeholder}
				type={type}
				required={required}
				minLength={minLength}
			/>
		</label>
	);
}
export default GInput;
