// ===============================================================
//? componente de CLASE
import React, { Component } from "react";

class ClaseComponente extends Component {
  render() {
    return (
      <div className="new">
        <h2>Componente de Clase</h2>
        <h3>Caracteristicas</h3>
        <ul>
          <li>extienden del Component de react</li>
          <li>Los componentes de clase reciben props con el This</li>
        </ul>
        <pre>
          <code>{"this.props.msg"}</code>
        </pre>
      </div>
    );
  }
}

// ===============================================================
//? componente de ARROW FUNCION

const ArrowComponente = () => {
  return (
    <div>
      <h2>componente con Arrow functions</h2>
    </div>
  );
};

export { ArrowComponente };

export default ClaseComponente;
