import { useContext } from "react";
import { FiltroContext } from "./FiltroProvider";

const useFiltro= () => {
    return useContext(FiltroContext);
}

export default useFiltro;
