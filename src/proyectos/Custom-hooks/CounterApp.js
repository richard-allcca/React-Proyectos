import React, { useState } from "react";
import "./counter.css";

const initialState = { cant1: 10, cant2: 20 };

const CounterApp = () => {
  const [state, setEstate] = useState(initialState);
  const { cant1, cant2 } = state;
  // console.log(setCounter);
  return (
    <div className="content-contador">
      <h1>Use state</h1>
      <h3>Valor 1 - {cant1}</h3>
      <h3>Valor 2 - {cant2}</h3>

      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setEstate({ ...state, cant1: cant1 + 1 })}
      >
        valor1 + 1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => setEstate({ ...state, cant2: cant2 - 1 })}
      >
        valor2 - 1
      </button>
    </div>
  );
};

export default CounterApp;
