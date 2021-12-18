import React from "react";
// llamando estilos de archivo css
import "./Estilos.css";
// llamando estilos creando modulo con Estilos.module.css
import "./Estilos.module.css";
// puedes llamar normalize desde el index.css - @import-normalize
//  para usar sass (aqui esta fallando)
import "./Estilos.scss";
export default function Estilos() {
  const myStyle = {
    borderRadius: "-5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  // ===============================
  //? NOTAS - para usar SASS
  //  npm i sass
  // ===============================

  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en Hoja CSS extrena</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: ".25rem", margin: "1rem" }}
      >
        Estilos en Linea Atributo style
      </h3>
      <h3 className="bg-react" style={myStyle}>
        Estilos en Variable pasado en linea
      </h3>
      <h3 className="bg-react">
        Agregando normalize con
        <br />
        <code>@import-normalize</code>
      </h3>
      <h3>Estilos con modulos</h3>
      <article>
        <ol>
          <li>este tipo de estilos es similar a un import css normal</li>
          <li>para usar estos modulos css luego de importar</li>
          <li>solo usa el nombre de clase en el elemento deseado</li>
        </ol>
        <button className="error">error</button>
        <button className="success">success</button>
      </article>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}
