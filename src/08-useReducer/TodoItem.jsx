import Proptypes from "prop-types";

export const TodoItem = ({ todo = {}, onDeleteTodo, onToggleTodo }) => {
	const { id, description, done } = todo;

	const classIcon = done ? "complete" : "";
	const classTodo = done ? "completeTodo" : "";

	return (
		<li className={`list-group-item d-flex justify-content-between align-items-center ${classTodo}`}>
			<span aria-label="span">{description}</span>
			<button
				aria-label="toogleBtn"
				className="btn btn-dark ms-auto"
				onClick={() => {
					onToggleTodo(id);
				}}>
				<i aria-label="todoIcon" className={`fa-solid fa-circle-check ${classIcon}`}></i>
			</button>
			<button
			aria-label="deleteBtn"
				className="btn btn-danger"
				onClick={() => {
					onDeleteTodo(id);
				}}>
				Delete
			</button>
		</li>
	);
};

TodoItem.propTypes = {
	todo: Proptypes.object.isRequired,
	onDeleteTodo: Proptypes.func.isRequired,
	onToggleTodo: Proptypes.func.isRequired,
};
