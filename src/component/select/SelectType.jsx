
import axios from 'axios';
import React,{useEffect,useState} from 'react';

export default function SelectType() {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    const urlApi='https://pokeapi.co/api/v2/type';
    axios.get(urlApi)
    .then(response=>{
      console.log(tipos);
      setTipos(response.results)
      console.log(response.results);
      
  
  
      })
  }, [])
 
  
 
  return (
    <div>
      <select>
      {tipos&&tipos.map((tipo)=> {return (
        <option value="">{tipo.name}</option> )
      })}
      </select>
         
    </div>
  )
}
