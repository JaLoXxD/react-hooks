const initialState = [
	{
		id: 1,
		todo: "Collect the soul gem...",
		done: false,
	},
];

const todoReducer = (state = initialState, action = {}) => {
	const { type, payload } = action;

	if (type === "[TODO] add todo") {
		return [...state, payload];
	}

	return state;
};

const newTodo = {
	id: 2,
	todo: "Collect the power gem...",
	done: false,
};

const addTodoAction = {
	type: "[TODO] add todo",
	payload: newTodo,
};

const todos = todoReducer(initialState, addTodoAction);

//console.log({ state: todos });
