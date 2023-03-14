import React from "react";
import { createGlobalStyle } from "styled-components";

// ==============================================================
// NOTE 
// "GlobalStyle" se usan en el index.js o App.js
// funciona como un reseteo general de styles
//  Puedes usar cualquier selector html para darle estilos
// ==============================================================

export function GlobalStyle() {

  const GlobalStyle = createGlobalStyle`
      h2{
        padding: 2rem;
        background-color: #fff;
        color: #61dafb;
        text-transform: uppercase;
      }
      p{
        /* background-color: hsl(5,65%,54%); */
        font-size: 1.5rem;
      }
      li{
        font-size: 1.5rem;
        list-style: none;
      }
    `;

  return (
    <div>
      <GlobalStyle />
      <h2>GlobalStyle</h2>
      <p>este es un ejemplo de como usar ese "GlobalStyle</p>
      <p>Se recomienda usarlo en el "index.js" o el "App"</p>
      <p>Afecta a todos los elementos de nuestra pagina como un reseteo</p>
    </div>
  );
}
