import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis/todosApi';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware),
});

// NOTE
// Ejemplo usado con Pokedex en src\proyectos\pokeApp\Pokedex.js