import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busque, setBusque] = useState({
        nombre:'',
        categoria:''
    })
    const [recetas, setRecetas] = useState([])

    const [consultar, setConsultar] = useState(false)

    const {nombre, categoria} = busque
    useEffect(() => { 
        if(consultar){
            const obtenerRecetas = async () => {
                const consulta = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`)
                setRecetas(consulta.data.drinks)
            }
            obtenerRecetas();
        }

    }, [busque])

    return(
        <RecetasContext.Provider
            value={{
                setBusque,
                setConsultar,
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider