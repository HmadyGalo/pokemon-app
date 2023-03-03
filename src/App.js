import React, { useEffect,useState } from "react";
import  "./App.css"
import {getPokemon, getPokemosFromApi, searchPokemon} from "./api/pokeapi-service"
import Searchbar from "./component/search/Searchbar";
import PokemonList from "./component/pokemos-list/PokemonsList";
import FiltroProvider from "./component/Provider/FiltroProvider.jsx";
import SelectType from "./component/select/SelectType"
import Navbar from "./component/navbar/Navbar";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [notFound, setNotFound] = useState(false);

 
  const pokemonsList =async () => {

      setNotFound(false);
      const data = await getPokemosFromApi();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);

   
    }

   
//renderizo la funcion
  useEffect(() => {
   pokemonsList();

  
  }, []);

  //promesa de data de busqueda
  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return pokemonsList();
    }
      setNotFound(false)
      const result = await searchPokemon(pokemon)
      if(!result) {
        setNotFound(true)
      } else {
        setPokemons([result])
      
      }
    
  
    }
  return (
    <FiltroProvider>
         <Navbar title={"POKEMON APP"}/>
     <section className="principal">
          <Searchbar onSearch={onSearchHandler}/>
          <SelectType/>
     </section>
          
    <header className="App-header">
    
    
        {notFound ? (
          <div class-name="not-found-text"> No esta el Pokemon que buscas </div>
        ) :(<PokemonList   pokemons={pokemons} />)} 

        
      </header>
      </FiltroProvider>
  );
}

export default App;
