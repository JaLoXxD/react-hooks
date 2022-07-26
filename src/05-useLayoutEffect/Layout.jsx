import { useCounter, useFetch } from "../hooks";
import { Spinner, SingleQuote, QuoteControls } from "../03-examples";

export const Layout = () => {
	const { counter, addCounter, reduceCounter } = useCounter(1);

	const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

	//double !! means that the value is gonna converted to boolean...
	const { author, quote } = !!data && data[0];

	// if(isLoading){
	//     return( <h2 className="text-danger">Loading...</h2> )
	// }

	const previous = () => {
		if (counter === 1) return;
		reduceCounter(1);
	};

	return (
		<>
			<h2>7) Breaking Bad Quotes</h2>
			<div className="quotesCont d-flex justify-content-center flex-column">
				{isLoading ? (
					<Spinner />
				) : (
					<>
						<SingleQuote author={author} quote={quote} />
						<QuoteControls previousQuote={previous} nextQuote={addCounter} />
					</>
				)}
			</div>
		</>
	);
};
