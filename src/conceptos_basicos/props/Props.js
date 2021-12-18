import React from "react";

export default function Props(props) {
  return (
    <div>
      <h2>Paso de las Props</h2>
      <h3>Caracteristicas</h3>
      <ul>
        <li>Se les puede pasar propiedades por defecto</li>
        <li>Puede recibir todo tipo de datos</li>
        <li>Puede recibir incluso components</li>
      </ul>
      <p>{props.porDefecto}</p>
    </div>
  );
}

Props.defaultProps = {
  porDefecto: "Ejemplo Propiedad por Defecto",
};
