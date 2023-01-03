import React, { Component } from 'react';

function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}
function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderCondicional extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessions: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        { this.state.sessions ? <Login /> : <Logout /> }
      </div>
    );
  }
}

