import { useState } from "react";

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const onCleanForm = () => {
		const defaultValues = {};
		Object.keys(formState).forEach((el) => {
			defaultValues[el] = "";
		});
		setFormState(defaultValues);
	};

	return { ...formState, onInputChange, onResetForm, onCleanForm };
};
