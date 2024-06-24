import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/slices/pokemon";

// NOTE - este componente solo lista nombres de pokemon con paginacion

const Pokedex = () => {
	const {
		isLoading,
		pokemons = [],
		page,
	} = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());// dispatch de Thunks
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1>Pokedex</h1>
			<hr />
			{isLoading ? (
				<h3>Cargando...</h3>
			) : (
				<ul>
					{pokemons.map((pokemon) => (
						<li key={pokemon.name}>{pokemon.name}</li>
					))}
				</ul>
			)}

			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemons(page))}
			>
				Next
			</button>
		</>
	);
};

export default Pokedex;
