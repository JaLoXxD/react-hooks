import { useCounter } from "../hooks/useCounter";

export const CounterWidthCustomHook = () => {
	const { counter, addCounter, reduceCounter, resetCounter } = useCounter();
	return (
		<>
			<h2>2) Counter with Hook</h2>
			<h3>Counter: {counter}</h3>
			<button
				className="btn btn-danger"
				onClick={() => {
					reduceCounter(1);
				}}>
				-1
			</button>
			<button
				className="btn btn-dark"
				onClick={() => {
					resetCounter();
				}}>
				Reset
			</button>
			<button
				className="btn btn-success"
				onClick={() => {
					addCounter(2);
				}}>
				+1
			</button>
		</>
	);
};
