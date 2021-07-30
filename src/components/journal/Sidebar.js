import React from 'react'
import 'boxicons'
import { Notas } from './Notas'

export const Sidebar = () => {
    return (
        <div className="journal__aside">
            <div className="journal__usuario">
                <h3>Oscar Ascencio</h3>
                <button className="boton boton-4">Cerrar Sesion</button>
            </div>
            <div className="agregar__entrada">
            <box-icon name='add-to-queue' size='lg' color="white" size="130px"></box-icon>
            <p className="agregar__texto">Crear Nota</p>
            </div>
            <Notas />
            <h1 className="journal__title">Notas App</h1>           
        </div>
    )
}
