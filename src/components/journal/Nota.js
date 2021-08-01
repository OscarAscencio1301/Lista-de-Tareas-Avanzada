import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activarNota, borrarNota } from '../../actions/notas'
import { useForm } from '../../hooks/useForm'
import {Barra} from './Barra'

export const Nota = () => {

    const {active} = useSelector(state => state.notas)
    const [valores, cambioInput, , resetearForm] = useForm(active)
    const {titulo, cuerpo} = valores

    const ref = useRef(active.id)
    const dispatch = useDispatch()

  
    useEffect(() => {
        if(active.id !== ref.current){
            resetearForm(active);
            ref.current = active.id
        }
   },[active,resetearForm])

   useEffect(() => {
    dispatch(activarNota(valores.id, {...valores}))
       
   }, [valores, dispatch])

const borrandoNota = () => {
    dispatch(borrarNota(active.id))
}
    return (
        <>  
             <Barra />
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
            <div className="nota__imagen-content">
            {
                active.url &&  <img src={active.url} alt="imagen" className="imagen__principal"/>
           
            }   
            </div>    
            </div>
            <button className="boton boton-3" onClick={borrandoNota}>Borrar</button>
        </>
    
    )
}
