import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [busque, setBusque] = useState({
        nombre:'',
        categoria:'',
        tipoBusqueda:''
    })
    const [recetas, setRecetas] = useState([])

    const [consultar, setConsultar] = useState(false)

    const [errorConsReceta, setErrorConsReceta] = useState(false)

    const {nombre, categoria, tipoBusqueda} = busque
    useEffect(() => { 
        if(consultar){
            const obtenerRecetas = async () => {
                setErrorConsReceta(false)
                let url= ''
                if(tipoBusqueda === 'nombre'){
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`
                }else{
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
                }
                
                await axios.get(url)
                .then( consulta => setRecetas(consulta.data.drinks))
                .catch(e => setErrorConsReceta(true))
            }
            obtenerRecetas();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [busque])

    return(
        <RecetasContext.Provider
            value={{
                setBusque,
                setConsultar,
                errorConsReceta,
                recetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider