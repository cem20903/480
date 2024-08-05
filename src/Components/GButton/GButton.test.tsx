import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
import GButton from "./GButton";

describe("Button", () => {
	it("should render the correct text", () => {
		render(
			<GButton type='button'>
				<span>Texto del boton</span>
			</GButton>
		);

		const textButton = screen.queryByText(/Texto del boton/i);

		expect(textButton).toBeInTheDocument();
	});

	it("should trigger onClick function passed", () => {
		const clickFunction = jest.fn();

		render(
			<GButton
				type='button'
				onClick={clickFunction}
			>
				<span>Texto del boton</span>
			</GButton>
		);

		const button = screen.getByRole("button");
		fireEvent.click(button);

		expect(clickFunction).toHaveBeenCalled();
	});
});
