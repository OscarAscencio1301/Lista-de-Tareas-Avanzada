import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarNotaFirebase, subirImagen } from '../../actions/notas'

export const Barra = () => {
    const {active} = useSelector(state => state.notas)
    const dispatch = useDispatch()

    const guardarNota = () => {
        dispatch(editarNotaFirebase(active))

    }

    const MostrarImagen = () => {
        document.querySelector("#Archivo").click();
    }
  

    const cambioArchivo = (e) => {
        const imagen = e.target.files[0];
        if(imagen){
            dispatch(subirImagen(imagen));
        }
        

    }
   
    return (
        <div className="journal__barra">
            <span>28 Agoto de 2021</span>
            <input
                type="file"
                onChange={cambioArchivo}
                id="Archivo"
                style={{
                    display: 'none'                   
                }}


            />
      
                <button className="boton boton-2" onClick={guardarNota}>Guardar</button>
                <button className="boton boton-2"  onClick={MostrarImagen} >Imagen</button>
          
        </div>
    )
}
