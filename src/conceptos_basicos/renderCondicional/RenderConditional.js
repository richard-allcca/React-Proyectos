import React, { Component } from "react";

function Login({ handleLogout }) {
  return <button onClick={ handleLogout }>Abrir Sesion</button>;
}
function Logout({ handleLogin }) {
  return <button onClick={ handleLogin }>Cerrar Sesion</button>;
}

// ===============================
// ES6 render condicional con Componentes de clase
// ===============================
export default class RenderCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      contador: 0,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.sumar = this.sumar.bind(this);
  }

  handleLogin() {
    this.setState({
      login: false,
    });
  }
  handleLogout() {
    this.setState({
      login: true,
    });
  }

  sumar() {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Renderizado Condicional</h3>
        <p>{ this.state.login }</p>
        { this.state.login ? (
          <Logout handleLogin={ this.handleLogin } />
        ) : (
          <Login handleLogout={ this.handleLogout } />
        ) }
        <h3>Evento en clase</h3>
        <p>{ this.state.contador }</p>
        <button onClick={ this.sumar }>+</button>
      </div>
    );
  }
}
// ===============================
// ? ES7 eventos de clase - Properties Initializer
// ===============================
export class EventEs7 extends Component {
  state = {
    contador: 0,
  };

  sumar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = () => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Evento de Clase ES7 </h3>
        <p>Properties Initializer</p>
        <nav>
          <button onClick={ this.sumar }>+</button>
          <button onClick={ this.restar }>-</button>
        </nav>
        <h4>{ this.state.contador }</h4>
      </div>
    );
  }
}

const Boton = ({ myOnClick }) => (
  <button onClick={ myOnClick }>Botón hecho componente</button>
);

export class EventoPropsParametro extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h3>Eventos pasados como Props con parametros</h3>
        <button
          onClick={ (e) =>
            this.handleClick(e, "Evento con parámetro en la mismca clase ")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */ }
        <Boton
          myOnClick={ (e) =>
            this.handleClick(
              e,
              "evento con parametro en Arrow functions hacia hijo"
            )
          }
        />
      </div>
    );
  }
}
