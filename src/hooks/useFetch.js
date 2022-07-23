import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getRequest = async () => {
		try {
			setState({ ...state, isLoading: true });
            setTimeout(async ()=>{
                const resp = await fetch(url);
                const data = await resp.json();
                console.log(data);
                setState({ ...state, data, isLoading: false });
            },500)
		} catch (err) {
			setState({ ...state, hasError: err, isLoading: false });
			console.log(err);
		}
	};

	useEffect(() => {
		getRequest();
	}, [url]);

	return { data: state.data, isLoading: state.isLoading, hasError: state.hasError };
};
