import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
	const { counter, addCounter } = useCounter();

	const [show, setShow] = useState(true);

	return (
		<>
			<h2>
				8) Counter: <Small counter={counter} />
			</h2>
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
