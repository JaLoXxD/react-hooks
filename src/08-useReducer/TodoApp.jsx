import { useTodo } from "../hooks";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
	const { todos, handleNewTodo, handleToogleTodo, handleDeleteTodo, todosCount, pendingTodosCount } = useTodo();

	return (
		<>
			<h2>
				Todo App ({todosCount()}) <small>Pending:{pendingTodosCount()}</small>
			</h2>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToogleTodo} />
				</div>
				<div className="col-5">
					<h4>Add TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
