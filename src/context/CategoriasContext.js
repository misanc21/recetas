import React, {createContext, useState} from 'react';

export const CategoriasContext = createContext();

//provider: donde se encuentran funciones y state
const CategoriasProvider = (props) => {
    
    const [hola, setHola] = useState('hola')

    return (
        <CategoriasContext.Provider
            value={{

            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider