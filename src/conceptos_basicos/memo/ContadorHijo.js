import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, sumar, restar }) => {
  console.log("hijo Contador se renderiza");

  let superNumero = useMemo(() => {
    let numero = 0;
    for (let i = 0; i < 1_000_000; i++) {
      numero++;
    }
    return numero;
  }, []);

  const style = {
    border: "1px solid hsl(255, 255%,0%)",
    margin: "1rem",
    padding: "1rem",
  };

  return (
    <div style={ style }>
      <h2>Hijo del Contador</h2>
      <h3>{ contador }</h3>
      <nav>
        <input type="button" onClick={ sumar } value="+" />
        <input type="button" onClick={ restar } value="-" />
      </nav>
      <h3>{ superNumero }</h3>
    </div>
  );
};

export default memo(ContadorHijo);

// REVIEW
  // un evento padre hace que el hijo que tiene una llamada a una api, se repita en cada cambio de estado del padre
  // Exepciones: cuando tiene paso de props al hijo, ese cambio afecta al hijo y renderiza, para evitar esto usamos "useCallback" en las funciones del padre

// NOTE
  // useMemo: memoriza el return de una función y solo cambia si la dependencia lo hace
  // memo: memoriza estado de componente
