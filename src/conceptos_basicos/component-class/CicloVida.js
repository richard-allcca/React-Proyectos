// ===============================
//? componentWillUnmount
//? componentDidMount
//? componentDidUpdate
// ===============================
import React, { Component } from 'react';

class Reloj extends Component {
  // constructor(props) { //este contructor da problemas si no es usado
  //   super(props);
  // }

  componentWillUnmount() {
    // console.log(3, 'El Componente a sido eliminado del DOM')
  }

  render() {
    return (
      <div>
        <h3>{this.props.hora}</h3>
      </div>
    )
  }
}
// ===============================
//? alternativa a componente reloj de clase 
// function Reloj(props) {
//   return (
//     <div>
//       <h3>{props.hora}</h3>
//     </div>
//   )
// }
// ===============================
export default class ClicoVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, 'el component se inicializa, aun no esta en el DOM')

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    }
    this.temporizador = null;
  }

  conponentDidMount() {
    // console.log(1, 'el componente ya se encuentra en el DOM')
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(2, 'El stado o las props de componente han cambiado')
    console.log(prevProps);
    console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    })
  }

  detener = () => {
    clearInterval(this.temporizador)
    this.setState({
      visible: false,
    })
  }

  render() {
    // console.log(4, 'el component se dibuja o redibuja por algún cambio en el DOM')
    return (
      <div>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </div>
    )
  }
}