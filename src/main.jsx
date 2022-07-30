import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HooksApp } from "./HooksApp";
import "./index.css";
import "./08-useReducer/intro-reduces";
import { MainApp } from "./09-useContext/MainApp";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <HooksApp /> */}
			<MainApp />
		</BrowserRouter>
	</React.StrictMode>
);
