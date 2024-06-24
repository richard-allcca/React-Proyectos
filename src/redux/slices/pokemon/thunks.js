// NOTE
// Thunks Ejemplo con fecht y axios
// Es un Middleware, es diferente a los customHooks de RTK Query
// Modifica el estado para consumirlo en el componente


import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./pokeSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {

    dispatch(startLoadingPokemon());

    // SECTION - Ejemplo Fetch
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    // console.log(data)

    // dispatch(setPokemon({ pokemons: data.results, page: page + 1 }));

    // SECTION - Ejemlo Axios
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    // console.log(data.results);

    dispatch(setPokemon({ pokemons: data.results, page: page + 1 }));

  };
};