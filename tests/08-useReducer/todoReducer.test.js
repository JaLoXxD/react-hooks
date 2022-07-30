import { render, renderHook } from "@testing-library/react";
import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("tests on todo reducer", () => {
	const initialState = [
		{
			id: 1,
			description: "Demo todo",
			done: false,
		},
	];

	test("should return the initial state", () => {
		const action = {
			type: "",
			payload: 0,
		};

		const newState = todoReducer(initialState, action);
		expect(newState).toBe(initialState);
	});

	test("should add a todo", () => {
		const action = {
			type: "ADD",
			payload: {
				id: 2,
				description: "add todo",
				done: false,
			},
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
		expect(newState).toEqual([...initialState, action.payload]);
	});
    
	test("should remove a todo", () => {
		const action = {
			type: "REMOVE",
			payload: 1,
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(0);
		expect(newState).toEqual([]);
	});

	test("should toggle the todo status", () => {
		const action = {
			type: "TOGGLE",
			payload: 1,
		};

		const newState = todoReducer(initialState, action);
		console.log(newState);
		expect(newState).toEqual([{...initialState[0], done: true}]);
	});
});
