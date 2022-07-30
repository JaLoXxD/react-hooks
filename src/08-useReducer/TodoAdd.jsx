import { useState } from "react";
import { useForm } from "../hooks";
import Proptypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onCleanForm, onInputChange, onResetForm } = useForm({
		description: "",
	});

	const onSubmit = (event) => {
		event.preventDefault();
		if (description.length === 0) return;
		onNewTodo({
			id: new Date().getTime(),
			description,
			done: false,
		});
        onResetForm();
	};
	return (
		<form onSubmit={onSubmit}>
			<input type="text" name="description" placeholder="What's the task?" className="form-control" value={description} onChange={onInputChange} />
			<button type="submit" className="btn btn-primary mt-2">
				Submit
			</button>
		</form>
	);
};

TodoAdd.propTypes = {
	onNewTodo: Proptypes.func.isRequired,
};
