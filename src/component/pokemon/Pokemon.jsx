
import { useEffect, useState } from "react";
import "../../assets/Style/style.css";
import useFiltro from '../Provider/useFiltro';

const Pokemon = (props) => {
  const {poke} = props;
  const [tipo, setTipo] = useState('all');

  const { filtro } = useFiltro();

  useEffect(() =>
  {
    setTipo(filtro);
  }, [filtro]);

  
 if(filtro === 'all')
 {
  return (

    <div className="card">
        <div className="front">
        <span className="pokemon-id">#{poke.id}</span> 
        <h1 className="pokemon-title">{poke.name}
        </h1>
         <img src={poke.sprites.front_default} className="card-img-top" alt="image-poke"/>
         {poke.types.map((type, index) => {
                          return (
         <p  key={index} className="tipo-id">
          Tipo:{type.type.name} </p> 
         )
        })}
       </div>
      <div className="back">
       <img src={poke.sprites.front_default} className="card-img-top" alt="image-poke"/>
       <h1>More Info </h1>
        <h2 className="info">Height:{poke.height} </h2>
        <h2 className="info">Weight:{poke.weight} </h2> 
      </div>
    </div>
     
    );
 } 
 else
 {
  return(
    <>
      {poke.types.map((type, index) =>
        {
          return ((type.type.name == filtro) ? (
          <div className="card" key={index}>
            <div className="front">
            <span className="pokemon-id">#{poke.id}</span> 
            <h1 className="pokemon-title">{poke.name}
            </h1>
            <img src={poke.sprites.front_default} className="card-img-top" alt="image-poke"/>
            {poke.types.map((type, index) => {
                              return (
            <p  key={index} className="tipo-id">
              Tipo:{type.type.name} </p> 
            )
            })}
          </div>
          <div className="back">
            <img src={poke.sprites.front_default} className="card-img-top" alt="image-poke"/>
            <h1>More Info </h1>
              <h2 className="info">Height:{poke.height} </h2>
              <h2 className="info">Weight:{poke.weight} </h2> 
            </div>
          </div>
      ) : '')
        })}
    </>
  )

  
 }
  
}

export default Pokemon;