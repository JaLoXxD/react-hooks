export const ShowIncrement = ({ increment }) => {
	return (
		<button
			className="btn btn-dark"
			onClick={() => {
				increment( 5 );
			}}>
			Increment
		</button>
	);
};
