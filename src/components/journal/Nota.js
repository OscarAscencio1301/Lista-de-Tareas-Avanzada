import React from 'react'

export const Nota = () => {
    return (
        <>
            <div className="nota__main-content">
            <div className="nota__ingresar">
                <input 
                    type="text"
                    placeholder="Titulo de la nota"
                    className="nota__titulo"
                />
                <textarea 
                    placeholder="Texto de la nota"
                    className="nota__cuerpo"
                ></textarea>
            </div> 
            <div className="nota__imagen"></div>    
            </div>
            <button className="boton boton-3">Borrar</button>
        </>
    
    )
}
