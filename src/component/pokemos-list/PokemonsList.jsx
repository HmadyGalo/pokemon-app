
import Pokemon from "../pokemon/Pokemon";


const PokemonList = (props) => {
  const { pokemons} = props;

  return (
    <section>
      <p>Prueba!</p>
     <div className="row"> 
        {pokemons && pokemons.map((pokemon, index) => {
            return (
          <Pokemon poke={pokemon} key={index} /> 
          );
        })}
        </div>

     
    </section>
  );
};

export default PokemonList;