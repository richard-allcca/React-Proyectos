import React, { Component } from 'react';

// ===============================
// Eventos como componente funcional
// ===============================

// Function NORMAL
function Boton(props) {
  return (
    <button onClick={ props.miEvent }>Botón con Function</button>
  );
}

// Arrow Function
const Boton2 = (props) => (<button onClick={ props.miEvent2 }>Botón con Arrow function</button>);

// DESTRUCTURACIÓN con Arrow Function 
const Boton3 = ({ miEvent3 }) => (<button onClick={ miEvent3 }>Botón con Destructuring</button>);

// =================================
// NOTE - No todos los eventos son soportados por react la lista esta en readme.md
// ==================================
export default class App extends Component {

  handleClick = (e) => {
    //? Evento sintetico y nativo 
    console.log(e);// evento sintetico(capa react)
    console.log(e.nativeEvent); // evento nativo JS

    //? saludo sin parametros
    console.log('evento click saludando');

  };
  handleClick2 = (e, msj) => {

    //? saludo con parametros parametros
    console.log(msj);
  };

  render(e) {
    return (
      <div>
        <h2>Mas sobre tipos de Eventos</h2>
        <button onClick={ this.handleClick }>Saludo sin parametro</button>
        <button onClick={ (e) => this.handleClick2(e, 'saludo con parametros') }>Saludo con parametro</button>
        <br />
        <Boton miEvent={ this.handleClick } />
        <Boton2 miEvent2={ this.handleClick } />
        <Boton3 miEvent3={ this.handleClick } />
      </div>
    );
  }
}