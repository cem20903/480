import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import renderWithProviders from "../../test/renderWithProviders";

describe("Login", () => {
	it("should goes to the weather view when login is subbmited", async () => {
		renderWithProviders(<App />);

		await screen.findByRole("heading", { name: "Login" });

		const emailInput = screen.getByRole("textbox", { name: "email" });
		const passwordInput = screen.getByLabelText(/password/i);

		fireEvent.change(emailInput, { target: { value: "prueba@email.com" } });
		fireEvent.change(passwordInput, { target: { value: "******" } });

		const submitButton = screen.getByRole("button", { name: "Log In" });

		fireEvent.click(submitButton);

		const notificationText = screen.getByRole("heading", {
			name: "VISTA EL TIEMPO:",
		});

		expect(notificationText).toBeInTheDocument();
	});
});
