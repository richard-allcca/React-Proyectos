import styled, { css, keyframes } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const setTransition = (time) => `all ${time} ease-in-out`;

// ==============================================================
// Animaciones
// ==============================================================
const fadeIn = keyframes` //  uso en ln/43
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
  `;
// ==============================================================
// variables - funciones
// ==============================================================
let mainColor = "DarkGrey"; // principal
let mainAlphaColor = "CornflowerBlue"; // hover

function onButton({ isButton }) {
  return isButton && // "css" puede sobreescribir estilos
    css`
		margin: auto;
		max-width: 50%;
		border-radius: 100px;
		cursor: pointer;
    background-color: lightblue;
	`;
}

function generateBoxShadow({ type }) {
  const size = type === 'big' ? '11px' : '6px';
  return `box-shadow: 4px 8px ${size} rgba(0,0,0,.3)`;
}

// ==============================================================
// Styled Component
// ==============================================================
const Myh3 = styled.h3`
	padding: 2rem;
	text-align: center;
	color: ${({ color }) => color};
	color: ${({ color }) => color || "hsl(206,96%,31%)"};
	background-color: ${mainColor};
	transition: ${setTransition("1s")};
	animation: ${fadeIn} 3s ease-out;

	${onButton}

	&:hover { 
		background-color: ${mainAlphaColor};
	}
`;

const Div = styled.div`
  width: 300px;
  margin: 0 auto;

  ${generateBoxShadow}
`;

export default function ComponentStyled() {
  return (
    <div >
      <GlobalStyle />
      <h2>Examples Styled Components</h2>
      <Myh3> h3, estilizado con Style Component</Myh3>
      <Myh3 color="#61dafb"> h3, con estilos usando "PROPS"</Myh3>
      <ul>
        <li> 🟡 la props se utilizan dentro de las template string</li>
        <li> 🟡 como una props normal se puede destructurar</li>
      </ul>
      <Myh3 isButton>Hola soy un h3, Estilizado como Buttons</Myh3>
      <p>
        para usar styled components dentro de styled components importa "css"
      </p>
      <p>
        este componente recibe una propiedad que nos ayuda a condicionar y
        aplicar estilos con una función
      </p>
      <Div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores nihil repellendus ab similique odit tempore doloribus, dolore nam voluptatum quae tenetur nostrum itaque optio perspiciatis, culpa, sit eos nemo.</Div>
    </div>
  );
}
