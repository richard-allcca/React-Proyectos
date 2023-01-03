// ===============================
// REFERENCIAS - con manejo de clases
// https://es.reactjs.org/docs/refs-and-the-dom.html

import React, { useRef } from "react";

export default function Referencias(props) {
  // usa la referencia y asignala a un elemento del DOM
  const refMenu = useRef();
  const refMenuBtn = useRef();

  const handleToggleMenu = () => {
    if (refMenuBtn.current.textContent === "Menú") {
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <div>
      <h2>Referencias</h2>
      <ul>
        <li>createRef para crear referencias en componente de clase</li>
        <li>Asigna una referencia a una "const" usando "useRef"</li>
        <li>La referencia creada asignala a un elemento del DOM</li>
      </ul>
      <button ref={ refMenuBtn } onClick={ handleToggleMenu }>
        Menú
      </button>
      <nav ref={ refMenu } style={ { display: "none" } }>
        <a href="index.html">section1</a>
        <br />
        <a href="index.html">section2</a>
        <br />
        <a href="index.html">section3</a>
        <br />
        <a href="index.html">section4</a>
      </nav>
    </div>
  );
}
