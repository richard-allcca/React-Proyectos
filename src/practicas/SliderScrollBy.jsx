import React, { useRef } from "react";
import "./SliderScrollBy.css";

const listImagesConfig = [
	{
		href: "#uk",
		ariaHidded: true,
		src: "assets/uk.png",
		alt: "uk",
		amount: 12150.25,
		currency: "British Pound",
	},
	{
		href: "#usa",
		ariaHidded: true,
		src: "assets/usa.png",
		alt: "us",
		amount: 12150.25,
		currency: "US Dollar",
	},
	{
		href: "#eu",
		ariaHidded: true,
		src: "assets/eu.png",
		alt: "eu",
		amount: 12150.25,
		currency: "Euro",
	},
	{
		href: "#cz",
		ariaHidded: true,
		src: "assets/cz.png",
		alt: "cz",
		amount: 12150.25,
		currency: "Czech koruma",
	},
	{
		href: "#chf",
		ariaHidded: true,
		src: "assets/chf.png",
		alt: "chf",
		amount: 12150.25,
		currency: "Swiss franc",
	},
];

const SliderScrollBy = () => {
	const refBackAccounts = useRef();

	const handleClickNext = () => {
		refBackAccounts.current.scrollBy({
			top: 0,
			left: 200,
			behavior: "smooth",
		});
	};

	const handleClickPrev = () => {
		refBackAccounts.current.scrollBy({
			top: 0,
			left: -200,
			behavior: "smooth",
		});
	};

	const getCards = listImagesConfig.map((el, index) => {
        return (
            <a
            href={el.href}
            className="bank-account"
            key={index}
        >
            <img
                className="flag"
                aria-hidden={el.ariaHidded}
                src={el.src}
                alt={el.alt}
            />
            <div>
                <h2 role="presentation">{el.amount}</h2>
                <div className="currency">{el.currency}</div>
            </div>
        </a>
        )
    })

	return (
		<div className="container-slider">
			<div className="action-buttons">
				<button
					onClick={handleClickPrev}
					type="button"
					id=""
					className="action-button--prev action-button"
				>
					<svg
						width="16"
						height="16"
						fill="currentColor"
						focusable="false"
						viewBox="0 0 24 24"
					>
						<path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
					</svg>
				</button>
				<button
					onClick={handleClickNext}
					type="button"
					id=""
					className="action-button--next action-button"
				>
					<svg
						width="16"
						height="16"
						fill="currentColor"
						focusable="false"
						viewBox="0 0 24 24"
					>
						<path d="M12.771 7.115a.829.829 0 0 0-1.2 0L3 15.686l1.2 1.2 7.971-7.971 7.972 7.971 1.2-1.2-8.572-8.571Z"></path>
					</svg>
				</button>
			</div>

			<div
				ref={refBackAccounts}
				className="bank-accounts"
			>
				{getCards}
			</div>
		</div>
	);
};

export default SliderScrollBy;
