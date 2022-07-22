import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "JaLoXxD",
		email: "jororlando512@gmail.com",
	});

	const { username, email } = formState;

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	};

	// useEffect(() => {
	// 	console.log("called");
	// }, []);

	// useEffect(() => {
	// 	console.log("username changed");
	// }, [username]);

	// useEffect(() => {
	// 	console.log("email changed");
	// }, [email]);

	return (
		<>
			<h2 className="mt-4">3)Simple form</h2>

			<input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
			<input type="email" className="form-control mt-2" placeholder="jororlando512@gmail.com" name="email" value={email} onChange={onInputChange} />
			{(username === "JaLoXxD") && <Message />}
		</>
	);
};
