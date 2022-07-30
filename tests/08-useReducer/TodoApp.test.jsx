import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("tests on TodoApp component", () => {
	const handleNewTodoMock = jest.fn();
	const handleToogleTodoMock = jest.fn();
	const handleDeleteTodoMock = jest.fn();
	const todosCountMock = jest.fn();
	const pendingTodosMock = jest.fn();

	useTodo.mockReturnValue({
		todos: [
			{ id: 1, description: "Collect power gem.", done: false },
			{ id: 2, description: "Collect soul gem.", done: false },
			{ id: 3, description: "Collect time gem.", done: false },
			{ id: 4, description: "Collect space gem.", done: true },
		],
		handleNewTodo: handleNewTodoMock,
		handleToogleTodo: handleToogleTodoMock,
		handleDeleteTodo: handleDeleteTodoMock,
		todosCount: todosCountMock,
		pendingTodosCount: pendingTodosMock,
	});

	beforeEach(() => jest.clearAllMocks());

	test("should show the component correctly", () => {
		render(<TodoApp />);
		screen.debug();
		expect(screen.getByText("Collect power gem."));
		expect(screen.getByText("Collect soul gem."));
		expect(screen.getByText("Collect time gem."));
		expect(screen.getByText("Collect space gem."));
	});
});
