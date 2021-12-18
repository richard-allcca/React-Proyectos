import React from "react";
import Practica4 from "./Practica4";

const PracticaTres = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Signo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <Practica4
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr colSpan="3">
              <td>Sin Datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default PracticaTres;
