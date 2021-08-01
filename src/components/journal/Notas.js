import React from 'react'
import { useSelector } from 'react-redux';
import { NotaInd } from './NotaInd';

export const Notas = () => {
    // const notasTotales = [1,2,3,4,6];
    const {notas} = useSelector(state => state.notas)
    // console.log(state)
    return (
        <div className="notas__totales">
        {
            notas.map(nota => <NotaInd key={nota.id} {...nota}/>)
        }
            
        </div>
    )
}
