import React, { useEffect } from "react";
import getPokemosFromApi from "../../api/pokeapi-service";

const PokemonList = () => {
  const pokemonsList = getPokemosFromApi();
  console.log(pokemonsList);

  // useEffect(() => {
  //   pokemonsList = getPokemosFromApi();
  // }, []);

  return (
    <section>
      <p>Prueba!</p>
    </section>
  );
};

export default PokemonList;