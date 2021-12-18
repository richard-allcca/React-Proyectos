import React, { useState } from "react";

const Practicas = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario Enviado!");
    setName("");
  };
  const handleInput = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputPrueba">Ingresa Texto</label>
      <input type="text" name="name" value={name} onChange={handleInput} />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Practicas;
