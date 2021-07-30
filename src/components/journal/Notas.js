import React from 'react'
import { NotaInd } from './NotaInd';

export const Notas = () => {
    const notasTotales = [1,2,3,4,6];
    return (
        <div className="notas__totales">
        {
            notasTotales.map(nota => <NotaInd key={nota}/>)
        }
            
        </div>
    )
}
