import React from 'react'
import 'boxicons'
import { Notas } from './Notas'
import { useDispatch } from 'react-redux'
import {logoutFirebase} from '../../actions/auth'
import { crearNota } from '../../actions/notas'

export const Sidebar = () => {
    const dispatch = useDispatch()
    const cerrarSesion = (e) => {
        e.preventDefault();
        dispatch(logoutFirebase())

    }
    const crearNotaBoton = () => {
        dispatch(crearNota());
    }
    return (
        <div className="journal__aside">
            <div className="journal__usuario">
                <h3>Oscar Ascencio</h3>
                <button className="boton boton-4" onClick={cerrarSesion}>Cerrar Sesión</button>
            </div>
            <div className="agregar__entrada" onClick={crearNotaBoton}>
                <box-icon name='add-to-queue' size='lg' color="white" ></box-icon>
                <p className="agregar__texto">Crear Nota</p>
            </div>
            <Notas />
            <h1 className="journal__title">Notas App</h1>           
        </div>
    )
}
