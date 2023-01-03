import React from "react";
import Hijo from "./Hijo";

const Padre = () => {
  return (
    <div>
      <Hijo numero={ 123 } saludo={ "hola, Richard requerido!" } />
    </div>
  );
};

export default Padre;
