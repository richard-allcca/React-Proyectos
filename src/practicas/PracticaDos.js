import React, { useEffect, useState } from "react";

const initialForm = {
  id: null,
  nombre: "",
  signo: "",
};

const PracticaDos = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
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
    [e.target.name]: e.target.value
  })
};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.signo ) {
      alert("Datos Incompletos")
      return false;
    }
    if (form.id === null) {
      createData(form)
    }else{
      updateData(form)
    }
    handleReset();
  };
  const handleReset = () => {
    setDataToEdit(null);
    setForm(initialForm);
  };

  return (
    <>
      <h3>Form Simulations</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          placeholder="Nombre"
          handleChange={handleChange}
        />
        <input
          type="text"
          name="signo"
          value={form.signo}
          placeholder="Apellido"
          handleChange={handleChange}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Reset" onclick={handleReset} />
      </form>
    </>
  );
};

export default PracticaDos;
