import React from "react";

const Spinner = () => {
	return (
		<div
			className="spinner-border text-dark"
			style={{
				width: "3rem",
				height: "3rem",
				borderWidth: "6px",
				margin: "auto",
				marginBottom: "30px",
				marginTop: "20px",
				display: "block",
			}}
			role="status"
		>
			<span className="visually-hidden">Loading...</span>
		</div>
	);
};

export default Spinner;
