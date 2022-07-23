import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
	const { username, email, password, onInputChange, onResetForm, onCleanForm } = useForm({
		username: "Jorge",
		email: "jororl@mail.com",
		password: "asd123",
	});

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
			<h2 className="mt-4">4) Form with custom hook</h2>

			<input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
			<input type="email" className="form-control mt-2" placeholder="jororlando512@gmail.com" name="email" value={email} onChange={onInputChange} />
			<input type="password" className="form-control mt-2" placeholder="Type password" name="password" value={password} onChange={onInputChange} />

			<button className="btn btn-danger mt-2" onClick={onResetForm}>
				Reset
			</button>
			<button className="btn btn-dark mt-2" onClick={onCleanForm}>
				Clean
			</button>
		</>
	);
};
