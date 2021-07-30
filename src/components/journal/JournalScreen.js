import React from 'react'
import { Barra } from './Barra'
import { Nota } from './Nota'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {
    return (
        <div className="journal__content">
        <Sidebar />
        <div className="journal__main">
                <Barra />
                <Nota />
            </div>  
        </div>
    )
}
