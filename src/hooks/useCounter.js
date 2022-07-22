import { useState } from "react";

export const useCounter = (val = 0) => {
	const [counter, setCounter] = useState(val);

	const addCounter = (num = 1) => {
		return setCounter(counter + num);
	};

	const reduceCounter = (num = 1) => {
		if (counter === 0) return;
		return setCounter(counter - num);
	};

	const resetCounter = () => {
		return setCounter(val);
	};

	return {
		counter,
		addCounter,
		reduceCounter,
		resetCounter,
	};
};
