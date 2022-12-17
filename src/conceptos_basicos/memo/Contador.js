import { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  // ejemplo uso normal
  // const sumar = () => setContador(contador + 1);
  // const restar = () => setContador(contador - 1);

  // ejemplo de metodos con useCallback
  const sumar = useCallback(() => setContador(contador + 1), [contador]);
  const restar = useCallback(() => setContador(contador - 1), [contador]);

  const handleInput = (e) => setInput(e.target.value);

  return (
    <div>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
  );
};

export default Contador;

// REVIEW:
// El cambio en las variables de estado de un component hace que se vuelva a crear por ese motivo el hijo que recibe las funciones del padre támbien se vuelve a renderizar, para evitar eso usarmos useCallback que nos permite enlazar una funcion a una solo una variable de stado y solo al cambiar esta se renderiza el hijo.
// NOTE:
// useCallback: memoriza el resultado de funciones para evitar re-renderizado hijos
// uso: recibe 2 parametros, una funcion y un arreglo de dependencias
// usalo cuando se pase una funcion como "prop" a un component memorizado
