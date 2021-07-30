import React from 'react'

export const NotaInd = () => {
    return (
        <div className="nota__individual">
            <div className="nota__imagen"></div>
            <div className="nota__texto">
                <h3>Titulo de la Nota</h3>
                <p>Cuerpo de la Nota</p>
            </div>
            <div className="nota__fecha">
                <span>Jueves</span>
                <p>23</p>
            </div>
            
        </div>
    )
}
