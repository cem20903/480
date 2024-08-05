import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import GInput from "./GlInput";

describe("Input", () => {
	it("should render the correct label text", () => {
		render(
			<GInput
				type='text'
				name='prueba'
				value='Valor por defecto'
				label='Prueba del label'
				onChange={() => {}}
			/>
		);

		const labelText = screen.queryByText(/Prueba del label/i);

		expect(labelText).toBeInTheDocument();
	});

	it("should trigger onChange function passed", () => {
		const onChangeFunction = jest.fn();

		render(
			<GInput
				type='text'
				name='prueba'
				value='Valor por defecto'
				label='prueba de lavel'
				onChange={onChangeFunction}
			/>
		);

		const input = screen.getByRole("textbox");

		fireEvent.change(input, { target: { value: "Valor" } });

		expect(onChangeFunction).toHaveBeenCalled();
	});
});
