import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import "./login.css";
import GButton from "../../Components/GButton/GButton";
import { setIsLogued } from "../../store/userSlice";

function Login() {
	const email = useRef<HTMLInputElement>(null);
	const password = useRef<HTMLInputElement>(null);

	const dispacth = useDispatch();

	function onSendLogin(event: React.FormEvent) {
		event.preventDefault();
		dispacth(setIsLogued(true));
	}

	const { t } = useTranslation();

	return (
		<div className='login'>
			<h2>Login</h2>
			<div>
				<form
					onSubmit={onSendLogin}
					className='login--form'
				>
					<label htmlFor='email-field'>Email</label>
					<input
						id='email-field'
						type='text'
						name='email'
						aria-label='email'
						className='login--input'
						ref={email}
						placeholder={t("enterEmail")}
						required
					/>
					<label htmlFor='password-field'>{t("password")}</label>
					<input
						id='password-field'
						type='password'
						name='password'
						aria-label='password'
						className='login--input'
						placeholder={t("enterPassword")}
						ref={password}
						required
					/>
					<GButton type='submit'>Log In</GButton>
				</form>
			</div>
		</div>
	);
}

export default Login;
