import { useCallback, useState } from "react";
import { ShowIncrement } from "./showIncrement";

export const CallbackHook = () => {
	const [counter, setcounter] = useState(10);

	const increment = useCallback(
		(add) => {
			console.log(add);
			setcounter((counter) => counter + add);
		},
		[counter]
	);

	return (
		<>
			<h2>10) useCallback Hook: {counter}</h2>
			<ShowIncrement increment={increment} />
		</>
	);
};
