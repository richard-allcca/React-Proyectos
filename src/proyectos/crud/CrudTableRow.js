import React from "react";

const CrudTableRow = ({ el, eventEdit, deleteData }) => {
  // console.log(eventEdit);
  const { id, name, constellation } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => eventEdit(el)}>editar </button>
        <button onClick={() => deleteData(id)}>eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
