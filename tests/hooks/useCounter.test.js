import { useCounter } from "../../src/hooks";
import { renderHook, act } from "@testing-library/react";

describe("test on useCounter hook", () => {
    const initialValue = 20;
	test("should return the default values", () => {
		const { result } = renderHook(() => useCounter());
		const { counter, addCounter, reduceCounter, resetCounter } = result.current;

		expect(counter).toBe(0);
		expect(reduceCounter).toEqual(expect.any(Function));
		expect(addCounter).toEqual(expect.any(Function));
		expect(resetCounter).toEqual(expect.any(Function));
	});

	test("should generate the counter with a value equal to 10", () => {
		const { result } = renderHook(() => useCounter(10));
		const { counter } = result.current;

		expect(counter).toBe(10);
	});

	test("should increment the counter", () => {
		const { result } = renderHook(() => useCounter(initialValue));
		const { addCounter } = result.current;

		act(() => {
			addCounter();
			addCounter(5);
		});

		expect(result.current.counter).toBe(initialValue + 6);
	});

    test("should decrement the counter", () => {
		const { result } = renderHook(() => useCounter(initialValue));
		const { reduceCounter } = result.current;

		act(() => {
			reduceCounter();
			reduceCounter(5);
		});

		expect(result.current.counter).toBe(initialValue - 6);
	});

    test("should reset the counter to the initial value", () => {
		const { result } = renderHook(() => useCounter(initialValue));
		const { resetCounter, addCounter, reduceCounter } = result.current;

		act(() => {
            addCounter(10);
			reduceCounter(6);
            resetCounter();
		});
        
		expect(result.current.counter).toBe(initialValue);
	});
});
