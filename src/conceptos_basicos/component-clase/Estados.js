import React, { Component } from 'react'

//? recibe el estado del padre mediante props linea35
function EstadoAHijo(props) {
  return (
    <div>
      <h3>{props.contadorHijo}</h3>
    </div>
  )
}

export default class Estado extends Component {

  constructor(props) {//is llega a tener props aqui las pasamos
    super(props);// llama al constructor del objeto de donde hereda(Component)
    this.state = {// aqui creamos el obj del estado
      contador: 0,
    }

    //? este interval es para mostrar el conteo del estate
    // setInterval(() => {
    //   if (this.state.contador < 10) {
    //     this.setState({
    //       contador: this.state.contador + 1
    //     })

    //   }
    // }, 1000);
  }

  render() {
    return (
      <div>
        <h2>El State</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    );
  }
}