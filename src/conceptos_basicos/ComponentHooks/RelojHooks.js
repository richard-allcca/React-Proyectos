import React, { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks(props) {
  const [hours, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      console.log("Face de Desmontaje");
      clearInterval(temporizador);
    };
  }, [visible]);

  // ===============================
  //! FUNCION que recibe un parametro adicional al evento (e) se ejecuta con () => {} dentro de las llaves de la funcion principal
  // ===============================
  return (
    <div>
      <h2>Reloj con Hooks</h2>
      {visible && <Reloj hora={hours} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </div>
  );
}
