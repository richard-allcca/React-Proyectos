import PropTypes from "prop-types";
import React from "react";

const Hijo = ({ saludo, numero = 12, subtitle }) => {
  return (
    <div>
      <h2>{ numero }</h2>
      <p>{ saludo }</p>
      <h3>{ subtitle }</h3>
    </div>
  );
};

// tipos
Hijo.propTypes = {
  numero: PropTypes.number,
};

// requerido
Hijo.propTypes = {
  saludo: PropTypes.string.isRequired,
};

// Default values
Hijo.defaultProps = {
  subtitle: "Soy un subTitulo",
};

export default Hijo;

