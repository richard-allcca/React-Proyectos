import React, { Component } from 'react';

export default class Eventos extends Component {
  // ===============================
  //? constructor
  // ===============================
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }
    //? bindeo de metodos para enlazar constextos 
    this.sumar = this.sumar.bind(this)
    this.restar = this.restar.bind(this)
  }

  // ===============================
  //? eventos 
  // ===============================
  sumar(e) {
    console.log('sumando')
    this.setState({
      contador: this.state.contador + 1,
    })
  }
  restar(e) {
    console.log('restar')
    this.setState({
      contador: this.state.contador - 1,
    })
  }

  // ===============================
  //? renderizado
  // ===============================
  render() {
    return (
      <div>
        <h2>Eventos en componentes de Clase ES&</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar} >-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}