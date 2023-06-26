import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, deleteData, eventEdit }) => {
// console.log(eventEdit);
  return (
    <>
      <h3>Tabla de content</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRow
                key={el.id}
                el={el}
                eventEdit={eventEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr colSpan="3">
              <td>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default CrudTable;
