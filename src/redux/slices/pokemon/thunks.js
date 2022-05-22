import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./pokeSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {

    dispatch(startLoadingPokemon());

    //*  petición Fetch
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await resp.json();
    // console.log(data)

    // dispatch con payload para setear el estado
    // dispatch(setPokemon({ pokemons: data.results, page: page + 1 }));

    //*  Petición Axios
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
    console.log(data.results);

    // dispatch con payload para setear el estado
    dispatch(setPokemon({ pokemons: data.results, page: page + 1 }));

  }
}