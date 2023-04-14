import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as FlechaIzquierda } from "../../../assets/img/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "../../../assets/img/iconmonstr-angel-right-thin.svg";
import styled from "styled-components";

const Slideshow = ({
	children,
	controles = false,
	autoplay = false,
	velocidad = "500",
	intervalo = "5000",
}) => {
	const refSlideshow = useRef();
	const refIntervaloSlideshow = useRef();

	const next = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (refSlideshow.current.children.length > 0) {
			console.log("Siguiente");

			// Obtenemos el primer elemento del slideshow.
			const $firstChild = refSlideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			refSlideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const widthSlide = refSlideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			refSlideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				refSlideshow.current.style.transition = "none";
				refSlideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				refSlideshow.current.appendChild($firstChild);

				refSlideshow.current.removeEventListener("transitionend", transicion);
			};

			// Eventlistener para cuando termina la animacion.
			refSlideshow.current.addEventListener("transitionend", transicion);
		}
	}, [velocidad]);

	const prev = () => {
		console.log("Anterior");
		if (refSlideshow.current.children.length > 0) {
			// Obtenemos el ultimo elemento del slideshow.
			const index = refSlideshow.current.children.length - 1;
			const $lastChild = refSlideshow.current.children[index];

			refSlideshow.current.insertBefore(
				$lastChild,
				refSlideshow.current.firstChild
			);

			refSlideshow.current.style.transition = "none";
			const widthSlide = refSlideshow.current.children[0].offsetWidth;
			refSlideshow.current.style.transform = `translateX(-${widthSlide}px)`;

			setTimeout(() => {
				refSlideshow.current.style.transition = `${velocidad}ms ease-out all`;
				refSlideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	};

	// Infinity loop
	useEffect(() => {
		if (autoplay) {
			refIntervaloSlideshow.current = setInterval(() => {
				next();
			}, intervalo);

			// Eliminamos los intervalos
			refSlideshow.current.addEventListener("mouseenter", () => {
				clearInterval(refIntervaloSlideshow.current);
			});

			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			refSlideshow.current.addEventListener("mouseleave", () => {
				refIntervaloSlideshow.current = setInterval(() => {
					next();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, next]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={refSlideshow}>{children}</ContenedorSlideshow>

			{controles && (
				<Controles>
					<Boton onClick={prev}>
						<FlechaIzquierda />
					</Boton>
					<Boton derecho onClick={next}>
						<FlechaDerecha />
					</Boton>
				</Controles>
			)}
		</ContenedorPrincipal>
	);
};

const ContenedorPrincipal = styled.div`
	position: relative;
`;

const ContenedorSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: 0.3s ease all;
	/* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

	/* path {
		filter: ${(props) =>
		props.derecho
			? "drop-shadow(-2px 0px 0px #fff)"
			: "drop-shadow(2px 0px 0px #fff)"};
	} */

	${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export { Slideshow };
