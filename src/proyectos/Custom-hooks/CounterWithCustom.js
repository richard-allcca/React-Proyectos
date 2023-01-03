import React from "react";
import useCounter from "../../hooks/useCounter";

const CounterWithCustom = () => {
  const { state, incrementar, decrementar, reset } = useCounter();
  // console.log(state, incrementar, decrementar);
  return (
    <div>
      <h1>Contador con Custom Hooks</h1>
      <h3>{state}</h3>
      <hr />
      <button onClick={() => incrementar(2)}>sumar</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => decrementar(2)}>restar</button>
    </div>
  );
};

export default CounterWithCustom;
