import React from "react";
import useIntersectionElement from "./useIntersectionElement";
import './styles.css'

const IntersectionElement = () => {
	const [containerRef, isVisible] = useIntersectionElement({
		root: null,
		rootMargin: "0px",
		threshold: 1.0,
	});
	return (
		<div className="container">
			<div className="isVisible">
				{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
			</div>

			<div className="section"></div>

			<div className="box" ref={containerRef}>
				<img src="https://placeimg.com/200/200/nature" alt="nature" />
			</div>
		</div>
	);
};

export default IntersectionElement;

// https://dev.to/producthackers/intersection-observer-using-react-49ko