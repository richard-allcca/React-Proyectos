import { PropTypes } from "prop-types";
import React, { useState } from "react";

const FormSearch = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    handleAdd(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-gif">
      <input type="text" value={inputValue} onChange={handleChange} />
      {/* <button type="submit" value="Agregar">
        Agregar
      </button> */}
    </form>
  );
};

FormSearch.prototype = {
  handleAdd: PropTypes.func.isRequired,
};

export default FormSearch;

// Notas:
// Categories.prototype: obliga recibir la funcion (handleAdd) del padre(GifApp)
