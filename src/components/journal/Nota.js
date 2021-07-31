import React from 'react'
import { useForm } from '../../hooks/useForm'

export const Nota = () => {
    const [valores, cambioInput] = useForm({
        titulo: '',
        cuerpo: '',
    })
    const {titulo,cuerpo} = valores;
    return (
        <>
            <div className="nota__main-content">
            <div className="nota__ingresar">
                <input 
                    type="text"
                    placeholder="Titulo de la nota"
                    className="nota__titulo"
                    name="titulo"
                    value={titulo}
                    onChange={cambioInput}
                />
                <textarea 
                    placeholder="Texto de la nota"
                    className="nota__cuerpo"
                    name="cuerpo"
                    value={cuerpo}
                    onChange={cambioInput}
                ></textarea>
            </div> 
            <div className="nota__imagen"></div>    
            </div>
            <button className="boton boton-3">Borrar</button>
        </>
    
    )
}
