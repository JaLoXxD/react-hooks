import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("tests on TodoItem component", () => {
	const todo = {
		id: 1,
		description: "Collect the time gem.",
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onToogleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("should show the pending todo", () => {
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToogleTodoMock} />);

		const listItem = screen.getByRole("listitem");
		const descSpan = screen.getByLabelText("span");
		const todoIcon = screen.getByLabelText("todoIcon");
		expect(descSpan.innerHTML).toEqual(todo.description);
		expect(listItem.className.trim()).toBe("list-group-item d-flex justify-content-between align-items-center");
		expect(todoIcon.className.trim()).toBe("fa-solid fa-circle-check");
	});

	test("should show the completed todo", () => {
		todo.done = true;

		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToogleTodoMock} />);

		const listItem = screen.getByRole("listitem");
		const todoIcon = screen.getByLabelText("todoIcon");

		expect(listItem.className.trim()).toBe("list-group-item d-flex justify-content-between align-items-center completeTodo");
		expect(todoIcon.className.trim()).toBe("fa-solid fa-circle-check complete");
	});

	test("should call onToogleTodo function when click the toogleBtn", () => {
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToogleTodoMock} />);

		const toogleBtn = screen.getByRole("button", { name: "toogleBtn" });

		fireEvent.click(toogleBtn);

		expect(onToogleTodoMock).toHaveBeenCalledWith(todo.id);
	});

    test("should call onDeleteTodo function when click the deleteBtn", () => {
		render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToogleTodoMock} />);

		const deleteBtn = screen.getByRole("button", { name: "deleteBtn" });

		fireEvent.click(deleteBtn);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
