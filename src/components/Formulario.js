import React, { useState, useContext, Fragment, useEffect } from 'react';
import {CategoriasContext} from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)
    const { setBusque, setConsultar } = useContext(RecetasContext)

    const [dis, setDis] = useState(false)

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria: '',
        tipoBusqueda:'nombre'
    })
    
    const getDatosReceta = e => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    
    const {nombre, categoria, tipoBusqueda} = busqueda 

    const verificaReceta = e =>{
        e.preventDefault()
        setBusque({
            nombre: nombre,
            categoria: categoria,
            tipoBusqueda: tipoBusqueda
        })
        setConsultar(true)
    }

    useEffect(() => {
        if(tipoBusqueda === 'nombre'){
            setDis(false) 
            setBusqueda({
                ...busqueda,
                categoria: ''
            })
        }else{
            setDis(true)
            setBusqueda({
                ...busqueda,
                nombre:''
            })
        }

    }, [tipoBusqueda])

    return (
        <Fragment>
            <form className="col 12" onSubmit={verificaReceta}>
                <fieldset>
                    <legend className="text-center">Busca bebidas por categoria o ingrediente</legend>
                </fieldset>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input"
                                type="radio"
                                value="nombre"
                                name="tipoBusqueda"
                                id="tipoNombre"
                                onClick={getDatosReceta}
                                defaultChecked
                            />
                            <label className="form-check-label" forhtml="tipoNombre">Nombre</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input"
                                type="radio"
                                value="categoria"
                                name="tipoBusqueda"
                                id="tipoCategoria"
                                onClick={getDatosReceta}
                                
                            />
                            <label className="form-check-label" forhtml="tipoNombre">Categoria</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 mb-3">
                        <input
                            name="nombre"
                            className="form-control"
                            type="text"
                            placeholder="Buscar por ingrediente"
                            onChange={getDatosReceta}
                            disabled={dis}
                            value={nombre}
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                            className="form-control mb-3"
                            name="categoria"
                            onChange={getDatosReceta}
                            disabled={!dis}
                            value={categoria}
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
        </Fragment>
     );
}
 

export default Formulario;