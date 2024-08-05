import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import App from "../../App";
import renderWithProviders from "../../test/renderWithProviders";

const fetchMock = jest.fn();
global.fetch = fetchMock;

const mockWeather = {
	list: [
		{
			dt: new Date().getTime() / 1000,
			dt_txt: "Fecha de Hoy",
			weather: [{ icon: "string" }],
			main: { temp_max: 456, temp_min: -999, temp: 1234 },
		},
	],
};

describe("Weather List", () => {
	it("Should show the correct text when the user does not clicks on a city", async () => {
		const mockFetch = Promise.resolve({
			json: () => Promise.resolve(mockWeather),
		});

		fetchMock.mockImplementation(() => mockFetch);
		renderWithProviders(<App />);

		await screen.findByRole("heading", { name: "Login" });

		const emailInput = screen.getByRole("textbox", { name: "email" });
		const passwordInput = screen.getByLabelText(/password/i);

		fireEvent.change(emailInput, { target: { value: "prueba@email.com" } });
		fireEvent.change(passwordInput, { target: { value: "******" } });

		const submitButton = screen.getByRole("button", { name: "Log In" });

		fireEvent.click(submitButton);

		expect(
			await screen.findByText(/Selecciona una ciudad para ver su clima/i)
		).toBeInTheDocument();
	});

	it("Should show the city weather info when the user clicks on the city", async () => {
		const mockFetch = Promise.resolve({
			json: () => Promise.resolve(mockWeather),
		});

		fetchMock.mockImplementation(() => mockFetch);
		renderWithProviders(<App />);

		await screen.findByRole("heading", { name: "Login" });

		const emailInput = screen.getByRole("textbox", { name: "email" });
		const passwordInput = screen.getByLabelText(/password/i);

		fireEvent.change(emailInput, { target: { value: "prueba@email.com" } });
		fireEvent.change(passwordInput, { target: { value: "******" } });

		const submitButton = screen.getByRole("button", { name: "Log In" });

		fireEvent.click(submitButton);

		const buttonCity = screen.getByRole("button", { name: "Toronto" });

		fireEvent.click(buttonCity);

		expect(fetch).toHaveBeenCalledWith(
			"https://api.openweathermap.org/data/2.5/forecast?q=Toronto&appid=1234&mode=json"
		);

		expect(await screen.findByText(/456/i)).toBeInTheDocument();
		expect(await screen.findByText(/-999/i)).toBeInTheDocument();
		expect(await screen.findByText(/1234/i)).toBeInTheDocument();
	});
});
