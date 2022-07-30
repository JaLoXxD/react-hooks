import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
	const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

	const handleNewTodo = (todo) => {
		const action = {
			type: "ADD",
			payload: todo,
		};
		dispatchTodo(action);
	};

	const handleDeleteTodo = (id) => {
		const action = {
			type: "REMOVE",
			payload: id,
		};
		dispatchTodo(action);
	};

	const handleToogleTodo = (id) => {
		const action = {
			type: "TOGGLE",
			payload: id,
		};
		dispatchTodo(action);
	};

	const todosCount = () => {
		return todos.length;
	};

	const pendingTodosCount = () => {
		return todos.filter((todo) => !todo.done).length;
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return {
		todos,
		handleNewTodo,
		handleToogleTodo,
		handleDeleteTodo,
		todosCount,
		pendingTodosCount,
	};
};
