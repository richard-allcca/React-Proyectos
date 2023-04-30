import React, { useEffect, useState } from "react";

const initialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constellation) {
      alert("Datos imcompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    //? Reseteo de Formulario
    setForm(initialForm); // resetea la variable de estado local
    setDataToEdit(null); // resetea el ID del objeto a eliminar
  };

  return (
    <>
      <h3>{!dataToEdit ? "Agregar" : "Editar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Nombre"
        />
        <input
          type="text"
          name="constellation"
          onChange={handleChange}
          value={form.constellation}
          placeholder="Constelación"
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </>
  );
};

export default CrudForm;
