import { render, screen, fireEvent } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("tests on MultipleCustomHooks component", () => {
	const mockIncrement = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		addCounter: mockIncrement,
		reduceCounter: jest.fn(),
		resetCounter: jest.fn(),
	});

    //restore status of mockIncrement	
	beforeEach(() => {
        jest.clearAllMocks();
    });

	test("should show the default component", () => {
		useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null });
		render(<MultipleCustomHooks />);
		expect(screen.getByText("5) Breaking Bad Quotes")).toBeTruthy();
		expect(screen.getByText("Loading...")).toBeTruthy();
	});

	test("should show a quote", () => {
		useFetch.mockReturnValue({ data: [{ author: "Jorge", quote: "Hola Mundo" }], isLoading: false, hasError: null });
		render(<MultipleCustomHooks />);
		expect(screen.getByText("Hola Mundo")).toBeTruthy();
		expect(screen.getByText("Jorge")).toBeTruthy();
		expect(screen.getByRole("button", { name: "previousBtn" })).toBeTruthy();
		expect(screen.getByRole("button", { name: "nextBtn" })).toBeTruthy();
	});

	test("should call addCounter function", () => {
		useFetch.mockReturnValue({
			data: [
				{ author: "Jorge", quote: "Hola Mundo" },
				{ author: "Dayana", quote: "Hola Mundo" },
			],
			isLoading: false,
			hasError: null,
		});
		render(<MultipleCustomHooks />);
		const nextBtn = screen.getByRole("button", { name: "nextBtn" });
		fireEvent.click(nextBtn);
		expect(mockIncrement).toBeCalled();
		screen.debug();
	});
});
