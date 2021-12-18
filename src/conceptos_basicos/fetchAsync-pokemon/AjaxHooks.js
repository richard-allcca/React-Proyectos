import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

// ===============================
//? Fetch ASYNC
// ===============================
export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async (url) => {
      let res = await fetch(url);
      let json = await res.json();

      json.results.forEach(async (el) => {
        let resp = await fetch(el.url);
        let json = await resp.json();

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };

    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);

  return (
    <div>
      <h2>Petición Async Ajax con Hooks</h2>
      <div className="grid-fluid">
        {pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          pokemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </div>
    </div>
  );
}
