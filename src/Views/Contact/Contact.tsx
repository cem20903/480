import React, { useEffect, useRef, useState } from "react";

import "./contact.css";

const Contact = () => {
	const [message, setMessage] = useState("");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		date: "",
		city: "",
		phone: "",
	});

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		setMessage("Formulario enviado con exito");

		setTimeout(() => {
			setMessage("");
		}, 3000);
	};

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
	}

	useEffect(() => {
		const { name, email, date, city, phone } = formData;

		setIsButtonDisabled(!name || !email || !date || !city || !phone);
	}, [formData]);

	return (
		<form
			onSubmit={handleSubmit}
			className='contact-form'
		>
			<div className='input--container'>
				<label htmlFor='name-field'>Nombre</label>
				<input
					id='name-field'
					type='text'
					name='name'
					aria-label='name'
					value={formData.name}
					onChange={handleChange}
					placeholder='Introduzca su Nombre'
					required
					className='contact--input'
				/>
			</div>
			<div className='input--container'>
				<label htmlFor='email-field'>Correo</label>
				<input
					id='email-field'
					type='email'
					name='email'
					aria-label='email'
					onChange={handleChange}
					placeholder='Introduzca su Correo'
					className='contact--input'
					required
				/>
			</div>
			<div className='input--container'>
				<label htmlFor='date-field'>Fecha de nacimiento</label>
				<input
					id='date-field'
					type='date'
					name='date'
					aria-label='date'
					onChange={handleChange}
					placeholder='Introduzca su Fecha de Nacimiento'
					className='contact--input'
					required
				/>
			</div>
			<div className='input--container'>
				<label htmlFor='city-field'>Ciudad</label>
				<input
					id='city-field'
					type='text'
					name='city'
					aria-label='city'
					onChange={handleChange}
					placeholder='Introduzca su Ciudad'
					className='contact--input'
					required
				/>
			</div>
			<div className='input--container'>
				<label htmlFor='phone-field'>Telefono</label>
				<input
					id='phone-field'
					type='tel'
					name='phone'
					aria-label='phone'
					onChange={handleChange}
					placeholder='Introduzca su Telefono'
					className='contact--input'
					minLength={9}
					required
				/>
			</div>
			<button
				type='submit'
				disabled={isButtonDisabled}
			>
				Enviar
			</button>
			{message && <p>{message}</p>}
		</form>
	);
};

export default Contact;
