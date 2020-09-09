import React, {useContext, useState} from 'react';
import {ModalContext} from '../context/ModalContext'

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
          width: '100%',  
        },
        [theme.breakpoints.up('sm')]: {
          width: 450,  
        },
        maxHeight: 600,
        overflowY: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

const Receta = ( {receta} ) => {

    //config de modal
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    const {setIdReceta, info, setInfo} = useContext(ModalContext)

    const mostraIngredientes = info => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if(info[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={i}>{info[`strIngredient${i}`]} - {info[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes;
    }
    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img 
                    className="card-img-top" 
                    src={receta.strDrinkThumb} 
                    alt={`imagen de ${receta.strDrink}`}
                    onClick={() =>{
                        setIdReceta(receta.idDrink)
                        handleOpen()
                    }}
                />
                <div className="card-body">
                    <button 
                        className="btn btn-block btn-primary"
                        type="button"
                        onClick={() =>{
                            setIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    >
                        Ver receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() =>{
                            handleClose()
                            setIdReceta(null)
                            setInfo({})
                        }}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{info.strDrink}</h2>
                            <h3 className="mt-4">Instructions</h3>
                            <p>
                                {info.strInstructions}
                            </p>
                            <img className="img-fluid mt-4" src={info.strDrinkThumb} alt="imagen"/>
                            <h3 className="mt-3">Ingredientes y cantidades</h3>
                            <ul>
                                {mostraIngredientes(info)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;