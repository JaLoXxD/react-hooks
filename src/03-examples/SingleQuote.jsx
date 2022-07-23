import { useLayoutEffect, useRef, useState } from "react";

export const SingleQuote = ({ quote, author }) => {
	const quoteRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { current } = quoteRef;
		const { width, height } = current.getBoundingClientRect();
		setBoxSize({ width, height });
	}, [quote]);
	return (
		<>
			<blockquote className="blockquote text-end">
				<p ref={quoteRef} className="mb-4">
					{quote}
				</p>
				<footer className="blockquote-footer">{author}</footer>
			</blockquote>
			<code>{JSON.stringify(boxSize)}</code>
		</>
	);
};
