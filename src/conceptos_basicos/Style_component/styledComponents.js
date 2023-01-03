// ===============================
// NOTE
// "css" puede sobreescribir estilos de un elemento ln/46
// "keyframe" para eventos
// "themeProvider" para themas como dark y light
// "createGlobalStyle" deberia ser creado y usado en index.js ó App.js
// ===============================
import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function ComponentStyled() {
  const setTransition = (time) => `all ${time} ease-in-out`;

  // ==============================================================
  // Animaciones
  // ==============================================================

  const fadeIn = keyframes` // fadeIn la usamos en "Myh3"
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
  `;
  // ==============================================================
  // variables
  // ==============================================================

  let mainColor = "#db7093"; // principal
  let mainAlphaColor = "#db709380"; // hover

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
		animation: ${fadeIn} 5s ease-out;

		${({ isButton }) =>
      isButton &&
      css`
          margin: auto;
          max-width: 50%;
          border-radius: 0.25rem;
          cursor: pointer;
          `}

      &:hover {
        background-color: ${mainAlphaColor};
      }
	`;

  return (
    <div>
      <h2>Styled Components</h2>
      <Myh3>Hola soy un h3, estilizado con Style Component</Myh3>
      <Myh3 color="#61dafb">Hola soy un h3, con estilos como "PROPS"</Myh3>
      <ul>
        <li>
          la props declarada se utiliza dentro de las template del
          styledComponents
        </li>
        <li>
          los estilos de una props solo se aplican al elemento donde se le
          declararon las props
        </li>
        <li>
          como una props normal se puede destructurar para usarlas sin "props"
        </li>
        <li>
          las props se aplican en cascada, empieza por el elemento que tiene la
          props
        </li>
        <li>
          entonces si le damos condicion o estilos por defecto se aplican solo a
          los siguientes components sin "PROPS"
        </li>
      </ul>
      <Myh3 isButton>Hola soy un h3, Estilizado como Buttons</Myh3>
      <p>
        para usar styled components dentro de styled components importa "css"
      </p>
      import { css } from 'react';
      <p>
        este componente recibe una propiedad que nos ayuda a condicionar y
        aplicar estilos con una función{ " " }
      </p>
    </div>
  );
}
