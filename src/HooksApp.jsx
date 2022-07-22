import { CounterApp } from "./01-useState/CounterApp";
import { CounterWidthCustomHook } from "./01-useState/CounterWidthCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";

export const HooksApp = () => {
	return (
		<>
			<h1>HooksApp</h1>
			<CounterApp />
			<CounterWidthCustomHook />
			<SimpleForm />
			<FormWithCustomHook />
		</>
	);
};
