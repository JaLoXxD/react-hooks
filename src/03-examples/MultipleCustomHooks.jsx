import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
	const { counter, addCounter, reduceCounter } = useCounter(1);

	const { data, hasError, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
	console.log({ data, hasError, isLoading });

	//double !! means that the value is gonna converted to boolean...
	const { author, quote } = !!data && data[0];

	// if(isLoading){
	//     return( <h2 className="text-danger">Loading...</h2> )
	// }

	const previousQuote = () => {
		if (counter === 1) return;
		reduceCounter(1);
	};

	return (
		<>
			<h2>BreakingBag Quotes</h2>
			<div className="quotesCont d-flex justify-content-center flex-column">
				{isLoading ? (
					<div className="spinner-border text-info justify-content-center m-auto" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				) : (
					<>
						<blockquote className="blockquote text-end">
							<p className="mb-4">{quote}</p>
							<footer className="blockquote-footer">{author}</footer>
						</blockquote>
						<div className="controls d-flex justify-content-between">
							<button
								className="btn btn-dark ml-auto"
								onClick={() => {
									previousQuote();
								}}>
								<i class="fa-solid fa-arrow-left"></i>
							</button>
							<button
								className="btn btn-dark ml-auto alig-"
								onClick={() => {
									addCounter();
								}}>
								<i class="fa-solid fa-arrow-right"></i>
							</button>
						</div>
					</>
				)}
			</div>
		</>
	);
};
