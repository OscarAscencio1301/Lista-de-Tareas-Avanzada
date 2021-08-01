import moment from 'moment'
import React from 'react'
import { useDispatch } from 'react-redux'
import {activarNota} from '../../actions/notas'


export const NotaInd = ({id,titulo,cuerpo,fecha,url}) => {
    const dispatch = useDispatch()
    const mostrarNota = () => {
        dispatch(activarNota(id, {
            titulo,
            cuerpo,
            fecha,
            url
        }))

        
    }

    return (
        <div className="nota__individual" onClick={mostrarNota}>
            {
                (url) &&
                <div className="nota__imagen"
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 'cover',
                }}>
                
            </div>
            }
            <div className="nota__texto">
                <h3>{titulo}</h3>
                <p>{cuerpo}</p>
            </div>
            <div className="nota__fecha">
                <span>{moment(fecha).format('dddd')}</span>
                <p>{moment(fecha).format('D')}</p>
            </div>
            
        </div>
    )
}
