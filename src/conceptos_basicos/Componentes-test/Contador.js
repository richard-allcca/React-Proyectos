import React, { useState } from "react";

const Contador = ({ valor = 100 }) => {
  const [value, setValue] = useState(valor);
  const sumar = () => setValue(value + 1);
  const restar = () => setValue(value - 1);
  const reset = () => setValue(valor);

  return (
    <>
      <h2>Contador</h2>
      <section className="contador">
        <button onClick={sumar}>+</button>
        <p>{value}</p>
        <button onClick={restar}>-</button>
      </section>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Contador;
