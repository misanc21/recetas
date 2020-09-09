import React, {useContext} from 'react';
import { RecetasContext } from '../context/RecetasContext'

import Receta from './Receta'

const Lista = () => {

    const { recetas, errorConsReceta } = useContext(RecetasContext)


    return (
        <div className="row mt-5">
            {errorConsReceta || recetas === undefined?
            <div className="col-12">
                <p className="bg-dark text-white p-4">No se encontraron bebidas, prueba con otro nombre o categoría.</p>
            </div>
            : 
            recetas.map(r => {
                return <Receta
                    key={r.idDrink}
                    receta = {r}
                />
            })
            }
        </div>
     );
}
 
export default Lista;