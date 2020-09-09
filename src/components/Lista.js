import React, {useContext} from 'react';
import { RecetasContext } from '../context/RecetasContext'

import Receta from './Receta'

const Lista = () => {

    const { recetas } = useContext(RecetasContext)

    return ( 
        <div className="row mt-5">
            {recetas.map(r => {
                return <Receta
                    key={r.drink}
                    receta = {r}
                />
            })}
        </div>
     );
}
 
export default Lista;