import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import renderWithProviders from "../../test/renderWithProviders";

describe("Contact", () => {
	it("should be a disabled button when the inputs has not info", async () => {
		renderWithProviders(<App />);

		await screen.findByRole("heading", { name: "Login" });

		const emailInput = screen.getByRole("textbox", { name: "email" });
		const passwordInput = screen.getByLabelText(/password/i);

		fireEvent.change(emailInput, { target: { value: "prueba@email.com" } });
		fireEvent.change(passwordInput, { target: { value: "******" } });

		const submitButton = screen.getByRole("button", { name: "Log In" });

		fireEvent.click(submitButton);

		const linkToContact = screen.getByRole("link", { name: "Contact" });

		fireEvent.click(linkToContact);

		await screen.findByRole("heading", { name: "Contact Form" });

		const sendButton = screen.getByRole("button", { name: "Send" });

		expect(sendButton).toBeDisabled();
	});

	it("should be a not disabled button when the inputs has all the inputs completed", async () => {
		renderWithProviders(<App />);

		await screen.findByRole("heading", { name: "Login" });

		const emailInput = screen.getByRole("textbox", { name: "email" });
		const passwordInput = screen.getByLabelText(/password/i);

		fireEvent.change(emailInput, { target: { value: "prueba@email.com" } });
		fireEvent.change(passwordInput, { target: { value: "******" } });

		const submitButton = screen.getByRole("button", { name: "Log In" });

		fireEvent.click(submitButton);

		const linkToContact = screen.getByRole("link", { name: "Contact" });

		fireEvent.click(linkToContact);

		await screen.findByRole("heading", { name: "Contact Form" });

		const inputName = screen.getByRole("textbox", { name: "name" });
		fireEvent.change(inputName, { target: { value: "David" } });

		const inputEmail = screen.getByRole("textbox", { name: "email" });
		fireEvent.change(inputEmail, { target: { value: "prueba@email.com" } });

		const inputDate = screen.getByLabelText("Birthdate");
		fireEvent.change(inputDate, { target: { value: "2015-12-10" } });

		const inputCity = screen.getByRole("textbox", { name: "city" });
		fireEvent.change(inputCity, { target: { value: "Valencia" } });

		const inputPhone = screen.getByRole("textbox", { name: "phone" });
		fireEvent.change(inputPhone, { target: { value: "676134986" } });

		const sendButton = screen.getByRole("button", { name: "Send" });

		expect(sendButton).not.toBeDisabled();
	});
});
