import React from "react";
import { Slideshow } from "./componentes/Slideshow";
import styled from "styled-components";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";

const AppSlideshow = () => {
	return (
		<main>
			<Titulo>Slide manual</Titulo>
			<Slideshow controles={true}>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt="" />
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt="" />
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img3} alt="" />
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img4} alt="" />
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>

			<Titulo>Slide autoplay</Titulo>
			<Slideshow
				controles={true}
				autoplay={true}
				velocidad="3000"
				intervalo="5000"
			>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img1} alt="" />
					</a>
					<TextoSlide colorFondo="navy">
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.falconmaters.com">
						<img src={img2} alt="" />
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
};

// TODO - convert to contain of p
const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

const Slide = styled.div`
	min-width: min-content; // default 100% esto deja ver el salto a lastchild
	overflow: hidden;
	transition: 0.3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background: ${(props) =>
		props.colorFondo ? props.colorFondo : "rgba(0,0,0,.3)"};
	color: ${(props) => (props.colorTexto ? props.colorTexto : "#fff")};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

export default AppSlideshow;
