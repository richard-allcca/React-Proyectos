import { Slideshow } from "./componentes/Slideshow";
import styled from "styled-components";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";

const listSlide = [
  {
    percent: "15%",
    img: img1
  },
  {
    percent: "20%",
    img: img2
  },
  {
    percent: "25%",
    img: img3
  },
  {
    percent: "30%",
    img: img4
  },
];
const AppSlideshow = () => {

  return (
    <main>
      <Titulo>Slide manual</Titulo>
      <Slideshow controles={ true }>
        {
          listSlide.map((item, index) => (
            <Slide key={index} >
              <a href="https://www.falconmaters.com">
                <img src={ item.img } alt="" />
              </a>
              <TextoSlide>
                <p>{ item.percent } descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
          ))
        }
      </Slideshow>

      <Titulo>Slide autoplay</Titulo>
      <Slideshow
        controles={ true }
        autoplay={ true }
        velocidad="3000"
        intervalo="5000"
      >
        {
          listSlide.map((item, index) => (
            <Slide key={index}e>
              <a href="https://www.falconmaters.com">
                <img src={ item.img} alt="" />
              </a>
              <TextoSlide colorFondo={index % 2 === 0 ? '#636e72':'#2d3436'}>
                <p>{item.percent} descuento en productos Apple</p>
              </TextoSlide>
            </Slide>
          ))
        }
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
	/* min-width: min-content; // default 100% esto deja ver el salto a lastchild */
	overflow: hidden;
	transition: 0.3s ease all;
	z-index: 10;
	height: 200px;
	position: relative;
  display: flex;
  flex-direction: column;

	img {
		width: 100%;
		vertical-align: top;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 4/3;
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
  display: inline-block;

	@media screen and (max-width: 700px) {
    position: relative;
		background: #000;
	}
  `;

export default AppSlideshow;
