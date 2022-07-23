import React from "react";
// import {memo} from "react";

export const Small = React.memo(({ counter }) => {
	console.log("Drawed..");
	return <small>{counter}</small>;
});
