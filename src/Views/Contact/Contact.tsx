import React, { useRef, useState } from "react";

import "./contact.css";

const Contact = () => {
	const [message, setMessage] = useState("");

	const name = useRef<HTMLInputElement>(null);
	const email = useRef<HTMLInputElement>(null);
	const date = useRef<HTMLInputElement>(null);
	const city = useRef<HTMLInputElement>(null);
	const phone = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		setMessage("Formulario enviado con exito");

		setTimeout(() => {
			setMessage("");
		}, 3000);
	};

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
					ref={name}
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
					ref={email}
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
					ref={date}
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
					ref={city}
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
					ref={phone}
					placeholder='Introduzca su Telefono'
					className='contact--input'
					minLength={9}
					required
				/>
			</div>
			<button type='submit'>Enviar</button>
			{message && <p>{message}</p>}
		</form>
	);
};

export default Contact;
