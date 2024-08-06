import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import userSlice from "../store/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import "../i18n";

function renderWithProviders(
	ui: React.ReactElement,
	{
		store = configureStore({
			reducer: { user: userSlice },
		}),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
		return (
			<Provider store={store}>
				<MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>
			</Provider>
		);
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
