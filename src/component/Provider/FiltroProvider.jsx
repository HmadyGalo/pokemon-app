import {  useState, createContext } from "react";




export default function FiltroProvider({children}) {
   const  [filtro, setFiltro]=useState("all");

    
 
  return (
     <FiltroContext.Provider value={{
         filtro,
         setFiltro,
      }}>
        {children}

     </FiltroContext.Provider>
     )
}
export  const FiltroContext=createContext(); 

