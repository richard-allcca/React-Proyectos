import React from "react";

const Practica4 = ({ el, setDataToEdit, deleteData }) => {
  return (
    <tr>
      <td>{el.nombre}</td>
      <td>{el.signo}</td>
      <td>
        <button onclick={() => setDataToEdit(el)}>Editar</button>
        <button onclick={() => deleteData(el.id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Practica4;
