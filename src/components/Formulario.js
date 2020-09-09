import React, { useState, useContext } from 'react';
import {CategoriasContext} from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)
    const { setBusque, setConsultar } = useContext(RecetasContext)

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria: ''
    })
    
    const getDatosReceta = e => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    
    const {nombre, categoria} = busqueda 

    const verificaReceta = e =>{
        e.preventDefault()
        setBusque({
            nombre: nombre,
            categoria: categoria
        })
        setConsultar(true)
    }

    return ( 
        <form className="col 12" onSubmit={verificaReceta}>
            <fieldset>
                <legend className="text-center">Busca bebidas por categoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={getDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={getDatosReceta}
                    >
                        <option value="">-- selecciona la categoria --</option>
                        {categorias.map(cat => {
                            return <option key={cat.strCategory }value={cat.strCategory}>{cat.strCategory}</option>
                        })}
                    </select>
                </div>
                <div className="col-md-4">
                    <button
                        type="submit"
                        className="btn btn-block btn-primary"
                    >
                        Buscar bebidas
                    </button>
                </div>
            </div>
        </form>
     );
}
 

export default Formulario;