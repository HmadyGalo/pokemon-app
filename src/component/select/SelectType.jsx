
import axios from 'axios';
import React,{useEffect,useState} from 'react';
import useFiltro from '../Provider/useFiltro';



export default function SelectType() {
  const [tipos, setTipos] = useState([]);

  const { setFiltro } = useFiltro();

  useEffect(() => {
    const axiosTipos = async () =>
    {
      const url = 'https://pokeapi.co/api/v2/type';

      await axios.get(url)
      .then(response=>
        {
          setTipos(response.data.results);
        });
    }

    axiosTipos();
  }, []);

  const handleTipo = e =>
  {
    setFiltro(e.target.value);
  }

  return (
    <div>
      <select className='select' onChange={handleTipo}>
        <option value="all">All</option>
        {tipos && tipos.map((tipo, index)=>
        {return (
          <option value={tipo.name} key={index}>{tipo.name}</option>
        )
        })}
      </select>
    </div>
  )
}
