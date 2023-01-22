import React, { useEffect, useRef } from "react";
import "./observer.css";
import { useObserver } from "./useObserver";

const ContentObserver = () => {
  // const imgRef = useRef();

	const [observer, setElements, entries] = useObserver({
		threshold: 1,
		root: null,
	});

  // console.log(imgRef.current.offsetHeight)

	useEffect(() => {
		const images = document.querySelectorAll(".img");
		setElements(images);
	}, [setElements]);

	useEffect(() => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const lazyImage = entry.target;
				lazyImage.src = lazyImage.dataset.src;
				lazyImage.classList.remove("lazy");
				observer.unobserve(lazyImage);
			}
		});
	}, [entries, observer]);

	return (
		<>
			<h1>UserObserver hook example ⬇️</h1>
			<div className="content-observer">
				<img
					className="img lazy"
					src="https://placeimg.com/500/500/animals"
					data-src="https://res.cloudinary.com/thouma/image/upload/v1632788548/dev-master_xqpsns.jpg"
					alt="Dev"
				/>
			</div>
		</>
	);
};

export default ContentObserver;

// Para un solo elemento
// https://dev.to/producthackers/intersection-observer-using-react-49ko