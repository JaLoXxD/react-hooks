import { useRef } from "react";

export const FocusScreen = () => {
	const inputRef = useRef();

	const onClick = () => {
		console.log(inputRef);
		const { current } = inputRef;
        current.select();
	};

	return (
		<>
			<h2>6) Focus Screen</h2>
			<input ref={inputRef} className="form-control" type="text" placeholder="Type your name..." />
			<button onClick={onClick} className="btn btn-dark mt-3">
				Set focus
			</button>
		</>
	);
};
