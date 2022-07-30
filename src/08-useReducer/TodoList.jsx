import { TodoItem } from "./TodoItem";
import Proptypes from "prop-types";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

	return (
		<ul className="list-group">
			{todos.map((todo) => {
				const { id } = todo;
				return <TodoItem key={id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />;
			})}
		</ul>
	);
};

TodoList.propTypes = {
	todos: Proptypes.array.isRequired,
	onDeleteTodo: Proptypes.func.isRequired,
};
