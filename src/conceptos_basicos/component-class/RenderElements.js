import React, { Component } from 'react';
import data from '../helpers.js/data.json';

function ElementLista(props) {
  return (
    <li>
      <a href={ props.el.web }>{ props.el.name }</a>
    </li>
  );
}

export default class RenderElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seaseons: ['Primavera', 'verano', 'otoño', 'invierno'],
    };
  }

  render() {
    // console.log(data);//contenido de import helpers
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del Año</h3>
        <ul>
          { this.state.seaseons.map((el, index) => (
            <li key={ index }>{ el }</li>
          )) }
        </ul>
        <h3>Frameworks Frontend JavaScript</h3>
        <ul>
          {
            data.Frameworks.map((el) => (
              <ElementLista key={ el.id } el={ el } />
            ))
          }
        </ul>
      </div >
    );
  }
}