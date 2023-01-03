import React from "react";
// ===============================================================
// metodo con Arrows function, no necestia improtar nada
// ===============================================================

const Componente = (props) => <h2>{ props.msg }</h2>;

// ===============================================================
// metodo con Funcional, no necestia improtar nada
// ===============================================================

// function Componente(props) {
//   return <h2>{props.msg}</h2>
// }

// ===============================================================
// componente de clase, necesita importar React {Component}
// ===============================================================

// import React, { Component } from 'react'

// class Componente extends Component {
//   render() {
//     return (
//       <div>
//         <h2>{this.props.msg}</h2>
//       </div>
//     )
//   }
// }

export default Componente;
