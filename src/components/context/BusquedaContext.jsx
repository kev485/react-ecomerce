import { createContext, useState, useContext, Children } from "react";
//creamos el contexto de busqueda
const BusquedaContext = createContext();

export const BusquedaProvider = ({ Children }) => {
    const [busqueda, setBusqueda] = useState("");

    return (
        <BusquedaContext.Provider value={{busqueda, setBusqueda }}>
            {Children}
        </BusquedaContext.Provider>
    );
}

export const useBusqueda = () => useContext(BusquedaContext);