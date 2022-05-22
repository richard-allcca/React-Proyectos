import { useState } from "react";

const useCounter = (initalState = 10) => {
  const [state, setState] = useState(initalState);
  const incrementar = (factor = 1) => {
    setState(state + factor);
  };
  const decrementar = (factor = 1) => {
    setState(state - factor);
  };
  const reset = () => {
    setState(initalState);
  };
  return { state, incrementar, decrementar, reset };
};

export default useCounter;
