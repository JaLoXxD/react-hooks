import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log("Here we go!");
	}
	return `${iterationNumber} iterations.`;
};

export const MemoHook = () => {
	const { counter, addCounter } = useCounter(5000);

	const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

	const [show, setShow] = useState(true);

	return (
		<>
			<h2>
				9) Counter: <small>{counter}</small>
			</h2>

			<h3>{memorizedValue}</h3>
			<button
				className="btn btn-dark"
				onClick={() => {
					addCounter();
				}}>
				+1
			</button>
			<button
				className="btn btn-dark"
				onClick={() => {
					setShow(!show);
				}}>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
