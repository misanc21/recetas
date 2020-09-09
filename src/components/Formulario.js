import React from 'react';

const Formulario = () => {
    return ( 
        <form className="col 12">
            <fieldset>
                <legend classname="text-center">Busca bebidas por categoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option>-- selecciona la categoria --</option>
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