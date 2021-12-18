import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form, // lo q viene en form(inicia vacio) combinalo con...
      [e.target.name]: e.target.value, // los [] lo hacen dinamico
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("Datos imcompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div className="song-form">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Artista"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Cancion"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
