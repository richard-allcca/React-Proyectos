import React, { Component } from "react";

// ===============================
//? Componente hijo
// ===============================
function Hijo(props) {
  return (
    <div>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementa}>+</button>
    </div>
  );
}

// ===============================
// ? Componente Padre
// ===============================
export default class App extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    // console.log(this.state)
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Comunicación entre componentes</h2>
        <h3>state del padre {this.state.contador}</h3>
        <Hijo mensaje="hijo 1 sin evento" />
        <Hijo
          incrementa={this.incrementarContador}
          mensaje="hijo 2 modifica al state de padre"
        />
      </div>
    );
  }
}
