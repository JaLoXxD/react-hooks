import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";

describe("tests on MainApp component", () => {
	test("should show home page", () => {
		render(
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);
		expect(screen.getByText("HomePage")).toBeTruthy();
	});
	test("should show login page", () => {
		render(
			<MemoryRouter initialEntries={["/login"]}>
				<MainApp />
			</MemoryRouter>
		);
		screen.debug();
		const loginA = screen.getByLabelText("loginA");
		expect(loginA.classList).toContain("active");
		expect(screen.getByText("LoginPage")).toBeTruthy();
	});
});
