/*
  API Service
*/

export const searchPokemon = async (pokemon) => {
  
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const response = await fetch(url)
      return await response.json() 
  
}
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';

export  const getPokemosFromApi = async ( ) => {
  const data = await fetch(apiUrl);
 return await data.json();

  
}
export const getPokemon = async (url) =>{
  const response = await fetch(url)
        return await response.json()
   
  
}


