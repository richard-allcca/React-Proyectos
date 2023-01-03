import React, { useState, useEffect } from "react";

export default function ScrollHooks(props) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]); // indica que este useEffect solo se ejecuta cuando este parametro tenga cambios

  // ===============================
  // Montaje
  // ===============================
  // si tiene el segundo parametro [] vacio se ejecuta solo en el montaje como un "componentDidMount"
  useEffect(() => {
    // console.log('Face de Montaje')
  }, []);


  // NOTE - si no tiene el segundo parametro definido se ejecutara en cada cambio no es RECOMENDABLE usarlo asi
  useEffect(() => {
    // console.log('Face de Actualización')
  });

  // ===============================
  // Desmontaje
  // ===============================
  useEffect(() => {
    return () => {
      // console.log('Face de Desmontaje')
    };
  });

  return (
    <div>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del Navegador { scrollY }px</p>
    </div>
  );
}
