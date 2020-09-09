import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [idReceta, setIdReceta] = useState(null)
    const [info, setInfo] = useState({})

    useEffect(() => {        
        const getReceta = async () => {
            if (!idReceta) return;
            await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`)
            .then(res => setInfo(res.data.drinks[0]))
        }   
        getReceta() 
    }, [idReceta])

    return ( 
        <ModalContext.Provider
            value={{
                setIdReceta,
                setInfo,
                info
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;