import React from 'react'
import propTypes from 'prop-types'

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.boleano ? 'es un verdadero' : 'es un falso'}</li>
        <li>{props.arreglo.join(",")}</li>
        <li>{props.objeto.nombre} {props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(",")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  )
}

Propiedades.defaultProps = {
  porDefecto: 'las props'
  // este valor se puede modificar desde la principal App.js
}

//? instala - npm i prop-types 
// modulo para validar el tipo de dato en las props
Propiedades.propTypes = {
  numero: propTypes.number.isRequired,
}