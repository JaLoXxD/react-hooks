import { useState } from "react";

export const CounterApp = () => {
	const [counters, setCounters] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const { counter1, counter2, counter3 } = counters;

	return (
		<>
			<h2>01) COUNTER APP</h2>
			<h3>Counter1: {counter1}</h3>
			<h3>Counter2: {counter2}</h3>
			<h3>Counter3: {counter3}</h3>
			<button
				className="btn btn-dark"
				onClick={() => {
					setCounters({ ...counters, counter1: counter1 + 1 });
				}}>
				+1
			</button>
		</>
	);
};
