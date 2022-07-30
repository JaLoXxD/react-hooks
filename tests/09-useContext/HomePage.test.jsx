import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("tests on HomePage Component", () => {
	const user = { name: "Dayana", age: 21 };

	test("should show component without the user", () => {
		render(
			<UserContext.Provider value={null}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText("pre");
		expect(preTag.innerHTML).toBe("null");
	});

	test("should show component with the user", () => {
		render(
			<UserContext.Provider value={user}>
				<HomePage />
			</UserContext.Provider>
		);

		const preTag = screen.getByLabelText("pre");
		expect(preTag.innerHTML).toContain(user.name);
		expect(preTag.innerHTML).toContain(String(user.age));
	});
});
