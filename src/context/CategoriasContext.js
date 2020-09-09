import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CategoriasContext = createContext();

//provider: donde se encuentran funciones y state
const CategoriasProvider = (props) => {
    
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const obtenerCategorias = async () => {
            const categorias = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            setCategorias(categorias.data.drinks)
        }
        obtenerCategorias()
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider