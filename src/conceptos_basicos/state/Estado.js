import React, { Component } from "react";

function Hijo(props) {
  return (
    <div>
      <h3>Component hijo</h3>
      <p>Estado del padre en el hijo</p>
      <p>{props.stado}</p>
    </div>
  );
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  render() {
    return (
      <div>
        <h2>El Estado</h2>
        <ul>
          <li>Si necesita Props las inicia en el constructor y el super</li>
          <li>El estado de una clase se inicia como Obj en el constructor</li>
          <li>El estado de un padre puede pasar a un hijo </li>
          <pre>
            <code>{"this.state={contador:0}"}</code>
          </pre>
        </ul>
        <p>Estado del padre</p>
        <p>{this.state.contador}</p>
        <Hijo stado={this.state.contador} />
      </div>
    );
  }
}
