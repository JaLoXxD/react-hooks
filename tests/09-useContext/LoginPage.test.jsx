import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("tests on LoginPage component", () => {
	const user = { name: "Dayana", age: 21 };
	const setUserMock = jest.fn();

	test("should exec setUser function", () => {
		render(
			<UserContext.Provider value={{ user, setUser: setUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);
		screen.debug();

		const setUserBtn = screen.getByRole("button", { name: "setUserBtn" });

		fireEvent.click(setUserBtn);

		expect(setUserMock).toHaveBeenCalled();
		expect(setUserMock).toHaveBeenCalledWith({ id: "123", mail: "jororlando512@gmail.com", name: "Jorge" });
	});
});
