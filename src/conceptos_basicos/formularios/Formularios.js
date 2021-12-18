// ===============================
//? NOTAS -
//! es importante que todos los input tengan "name"
// Usa "NAME" en los input para mediante la notacion del "." acceder a los input teniendo como referencia el form
// las variables de estado inician con "" vacias en todos los input
// para Enlazar label con input usa "htmlFor"
// Value en el input necesita un evento onChange en component de clases
// Value en Hooks se le asigna ()=>{} al onChange que apunte al origen del evento
// checkbox puedes usar en initialState un false si solo es 1 que valide checked

//? propiedades input modificadas del html original
//  defaultChecked - para seleccionar el input por porDefecto
//  defaulValue -  se le coloca al "select" para darle un valor por defecto

// ===============================
import React, { useState } from "react";

// ===============================
//? METODÓ AVANZADO - CONTROL DEL EVENTOS EN FORMULARIO
// ===============================
export default function Formularios() {
  //! una sola variable para manejar todos los input del formulario
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    //evento para input con value
    setForm({
      ...form, // lo que tenemos en form
      [e.target.name]: e.target.value,
      //accedemos al name del input que origina el evento[]
      // 2° actualiza el valor de [] con el e.target.value
    });
  };

  const handleChecked = (e) => {
    //evento para radio o checkbox
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El Formulario se ha Enviado");
  };

  return (
    <div>
      <h2>Formularios con Hooks - Tipos de Input</h2>
      <h3>Input tipo Texto</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          Nombre
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={form.nombre} //! usa "form." por la variable de estado ln/22
            onChange={handleChange}
          />
        </label>
        <hr />
        <h3>Input tipo Radio</h3>
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          defaultChecked
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="angular"
          name="sabor"
          value="angular"
          onChange={handleChange}
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="vue"
          name="sabor"
          value="vue"
          onChange={handleChange}
        />
        <hr />
        <h3>Input tipo Select</h3>
        <select name="lenguaje" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
        <hr />
        <h3>Input tipo Checkbox</h3>
        <label htmlFor="terminos">Acepto Terminos y Condicioines</label>
        <br />
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={handleChecked}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

// ===============================
//? METODÓ SENCILLO - CONTROL DE EVENTOS DE FORMULARIO
// ===============================
export function FormulariosSencillo(props) {
  //le asignamos esta variable de stado al input para tenerlo controlado mediante el estado
  const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState(""); //inicia con "" para validar una seleccion entre varios
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false); //como solo es una opción validamos el checked que nos da un boleano en el evento

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El Formulario se ha Enviado");
  };

  return (
    <div>
      <h2>Formularios con Hooks - Tipos de Input</h2>
      <p>Input tipo Texto</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          Nombre
          <input
            type="text"
            id="nombre"
            name="nombre" // para acceder al valor del input
            value={nombre} // se asigna como variable de estado
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
      </form>
      <p>Input tipo Radio</p>
      <form>
        <label htmlFor="vanilla">
          Vanilla
          <input
            type="radio"
            id="vanilla"
            name="sabor"
            value="vanilla"
            onChange={(e) => setSabor(e.target.value)}
          />
        </label>
        <label htmlFor="react">
          React
          <input
            type="radio"
            id="react"
            name="sabor"
            value="react"
            onChange={(e) => setSabor(e.target.value)}
            defaultChecked
          />
        </label>
        <label htmlFor="angular">
          Angular
          <input
            type="radio"
            id="angular"
            name="sabor"
            value="angular"
            onChange={(e) => setSabor(e.target.value)}
          />
        </label>
        <label htmlFor="vue">
          Vue
          <input
            type="radio"
            id="vue"
            name="sabor"
            value="vue"
            onChange={(e) => setSabor(e.target.value)}
          />
        </label>
      </form>
      <p>Input tipo Select</p>
      <form>
        <select
          name="lenguaje"
          onChange={(e) => setLenguaje(e.target.value)}
          defaultValue=""
        >
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">Go</option>
          <option value="rb">Ruby</option>
        </select>
      </form>
      <p>Input tipo Checkbox</p>
      <form>
        <label htmlFor="terminos">Acepto Terminos y Condicioines</label>
        <br />
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
