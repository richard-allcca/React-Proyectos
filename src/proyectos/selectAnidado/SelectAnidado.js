import React, { useState } from "react";

import SelectList from "./SelectList";

const SelectAnidado = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  // d81a7ac7-976d-4e1e-b7d3-b1979d791b6c
  // const TOKEN = `d81a7ac7-976d-4e1e-b7d3-b1979d791b6c`;
  const TOKEN = `70d118e2-2766-4953-8021-38accf3d128a`;

  return (
    <>
      <h2>Select Anidado</h2>
      <h3>México</h3>
      <SelectList
        title="Estados"
        url={ `https://api.copomex.com/query/get_estados?token=${TOKEN}` }
        handleChange={ (e) => {
          setState(e.target.value);
        } }
      />

      { state && (
        <SelectList
          title="Municipios"
          url={ `https://api.copomex.com/query/get_municipio_por_estado/Aguascalientes?token=${TOKEN}` }
          handleChange={ (e) => {
            setTown(e.target.value);
          } }
        />
      ) }

      { town && (
        <SelectList
          title="Colonia"
          url={ `https://api.copomex.com/query/get_colonia_por_cp/09810?token=${TOKEN}` }
          handleChange={ (e) => {
            setSuburb(e.target.value);
          } }
        />
      ) }
      <pre>
        <code>
          { state } - { town } - { suburb }
        </code>
      </pre>
    </>
  );
};

export default SelectAnidado;
