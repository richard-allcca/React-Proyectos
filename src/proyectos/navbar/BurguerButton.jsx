import React from "react";

const BurguerButton = ({ clicked, handleClick }) => {
	const burguer = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-align-justify"
		>
			<line x1="21" y1="10" x2="3" y2="10"></line>
			<line x1="21" y1="6" x2="3" y2="6"></line>
			<line x1="21" y1="14" x2="3" y2="14"></line>
			<line x1="21" y1="18" x2="3" y2="18"></line>
		</svg>
	);

	const xButton = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-x"
		>
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</svg>
	);

	return <button onClick={handleClick}>{clicked ? xButton : burguer}</button>;
};

export default BurguerButton;
