import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks";

describe("test on useForm hook", () => {
	const defaultForm = {
		name: "Jorge",
		age: 22,
		email: "jororlando512@gmail.com",
	};

	test("should return the default info", () => {});
	const { result } = renderHook(() => useForm(defaultForm));
	const { name, age, email } = defaultForm;

	expect(result.current).toEqual({
		name: name,
		age: age,
		email: email,
		onInputChange: expect.any(Function),
		onResetForm: expect.any(Function),
		onCleanForm: expect.any(Function),
	});

	test("should change the name", () => {
		const newName = "Dayana";

		const target = {
			name: "name",
			value: newName,
		};

		const { result } = renderHook(() => useForm(defaultForm));
		const { onInputChange } = result.current;

		act(() => onInputChange({ target }));

		expect(result.current.name).toBe(newName);
	});

	test("should reset the form to the initialState", () => {
		const newName = "Dayana";

		const target = {
			name: "name",
			value: newName,
		};

		const { result } = renderHook(() => useForm(defaultForm));
		const { onInputChange, onResetForm } = result.current;

		act(() => {
			onInputChange({ target });
			onResetForm();
		});

		expect(result.current).toEqual({
			name: name,
			age: age,
			email: email,
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
			onCleanForm: expect.any(Function),
		});
	});

	test("should clean the form", () => {
		const { result } = renderHook(() => useForm(defaultForm));
		const { onCleanForm } = result.current;

		act(() => onCleanForm());

		expect(result.current).toEqual({
			name: "",
			age: "",
			email: "",
			onInputChange: expect.any(Function),
			onResetForm: expect.any(Function),
			onCleanForm: expect.any(Function),
		});
	});
});
