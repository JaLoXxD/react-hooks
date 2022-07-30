import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<h2>LoginPage</h2>
			<hr />
			<pre>{JSON.stringify(user, null, 3)}</pre>
			<button aria-label="setUserBtn" className="btn btn-dark" onClick={() => setUser({ id: "123", name: "Jorge", mail: "jororlando512@gmail.com" })}>
				Set User
			</button>
		</>
	);
};
