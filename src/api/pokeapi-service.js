/*
  API Service
*/
const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

const getPokemosFromApi = async () => {
  const data = await fetch(apiUrl);
  const response = await data.json();

  return response.results;
};

export default getPokemosFromApi;