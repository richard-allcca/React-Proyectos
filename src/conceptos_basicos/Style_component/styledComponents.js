// ===============================
//! NOTAS
// para usar condicionales (ln 48) inporta "css"
// para eventos importa "keyframe"
// para themas como dark y light importa "themeProvider"
// para stylos GLOBALES importa "createGlobalStyle" este deberia ser creado y usado en el index.js p App.js
// ===============================
import React from "react";
import styled, { css, keyframes, createGlobalStyle } from "styled-components";

export default function ComponentStyled() {
  const setTransition = (time) => `all ${time} ease-in-out`;

  // ==============================================================
  //? Animaciones
  // importamos "keyFrames" de styled-compnents para hacer animations
  // esta función la pasamos como valor de animations en "Myh3"
  const fadeIn = keyframes`
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
`;
  // ==============================================================
  //? como variables
  //  estas variables se utilizan donde declares nuevos components styled
  let mainColor = "#db7093"; //color principal
  let mainAlphaColor = "#db709380"; // color hover

  // ==============================================================
  //? Style components - usado como etiqueta html
  //  declaramos la variable usamos un elemento de "styled" el "h3" c/ templateString para declarar los estilos
  //  usamos el nombre de esta variable como etiqueta html y esa tendra los styled
  const Myh3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${({ color }) => color};
    color: ${({ color }) => color || "hsl(206,96%,31%)"};
    background-color: ${mainColor};
    transition: ${setTransition("1s")};
    animation: ${fadeIn} 5s ease-out;
    ${
      "" /* esto valida si existe el atributo "isButton" para aplicar estilos
      aqui ya esta destructurado el isButton de "props" */
    }
    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

      ${"" /* puedes aplicar nesting dentro de las templateString */}
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
      <p>
        este componente recibe una propiedad que nos ayuda a condicionar y
        aplicar estilos con una función{" "}
      </p>
    </div>
  );
}
