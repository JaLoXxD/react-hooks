export const QuoteControls = ({ previousQuote, nextQuote }) => {
	return (
		<div className="controls d-flex justify-content-between">
			<button
				className="btn btn-dark ml-auto"
				aria-label="previousBtn"
				onClick={() => {
					previousQuote();
				}}>
				<i className="fa-solid fa-arrow-left"></i>
			</button>
			<button
				className="btn btn-dark ml-auto"
				aria-label="nextBtn"
				onClick={() => {
					nextQuote();
				}}>
				<i className="fa-solid fa-arrow-right"></i>
			</button>
		</div>
	);
};
