import React from 'react'
import { Barra } from './Barra'
import { Nota } from './Nota'
import { NotaNo } from './NotaNo'
import { Sidebar } from './Sidebar'


export const JournalScreen = () => {
    return (
        <div className="journal__content">
        <Sidebar />
        <div className="journal__main">
                <Barra />
                <Nota />
                {/* <NotaNo /> */}
            </div>  
        </div>
    )
}
