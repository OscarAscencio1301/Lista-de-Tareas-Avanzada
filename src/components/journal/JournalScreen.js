import React from 'react'
import { useSelector } from 'react-redux'
// import { Barra } from './Barra'
import { Nota } from './Nota'
import { NotaNo } from './NotaNo'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {
    const {active} = useSelector(state => state.notas)
    return (
        <div className="journal__content">
        <Sidebar />
        <div className="journal__main">
            
            {
                (active) ? <Nota /> : <NotaNo />
            }

            </div>  
        </div>
    )
}
