import React, { useEffect, useState } from "react";

import "./contact.css";
import { useTranslation } from "react-i18next";
import GInput from "../../Components/GInput/GlInput";
import GButton from "../../Components/GButton/GButton";

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
	const { t } = useTranslation();

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		setMessage(t("formSendSuccess"));

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
		<div className='contact'>
			<form
				onSubmit={handleSubmit}
				className='contact-form'
			>
				<h3>{t("contactForm")}</h3>
				<div className='contact--group'>
					<div className='input--container'>
						<GInput
							label={t("name")}
							type='text'
							name='name'
							aria-label='name'
							value={formData.name}
							onChange={handleChange}
							placeholder='Introduzca su Nombre'
							required
						/>
					</div>
					<div className='input--container'>
						<GInput
							label={t("email")}
							type='email'
							name='email'
							aria-label='email'
							value={formData.email}
							onChange={handleChange}
							placeholder='Introduzca su Correo'
							required
						/>
					</div>
				</div>
				<div className='input--container'>
					<GInput
						label={t("dateBirthday")}
						type='date'
						name='date'
						aria-label='date'
						value={formData.date}
						onChange={handleChange}
						placeholder='Introduzca su Fecha de Nacimiento'
						required
					/>
				</div>
				<div className='contact--group'>
					<div className='input--container'>
						<GInput
							label={t("city")}
							type='text'
							name='city'
							aria-label='city'
							value={formData.city}
							onChange={handleChange}
							placeholder='Introduzca su Ciudad'
							required
						/>
					</div>
					<div className='input--container'>
						<GInput
							label={t("phone")}
							type='tel'
							name='phone'
							aria-label='phone'
							value={formData.phone}
							onChange={handleChange}
							placeholder='Introduzca su Telefono'
							minLength={9}
							required
						/>
					</div>
				</div>

				<GButton
					type='submit'
					disabled={isButtonDisabled}
				>
					{t("send")}
				</GButton>

				{message && <p>{message}</p>}
			</form>
		</div>
	);
};

export default Contact;
