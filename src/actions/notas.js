import Swal from "sweetalert2"
import { db } from "../firebase/firebase-config"
import { cargaNotas } from "../helpers/cargaNotas"
import { subirArchivo } from "../helpers/subirArchivo"
import { types } from "../types/types"

export const crearNota = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const nuevaNota = {
            titulo: '',
            cuerpo: '',
            fecha: Date.now(),
            url: ''
        }
        db.collection(`${uid}/journal/notas`).add(nuevaNota).then((document) => {
        
            dispatch(activarNota(document.id, nuevaNota))
            dispatch(crearNotaRedcuer(document.id, nuevaNota))
         

        })
        

    }
}

export const crearNotaRedcuer = ( id, nota ) => ({
    type: types.crearNota,
    payload: {
        id, ...nota
    }
})


export const activarNota = (id, nota) => {
    return {
        type: types.activanota,
        payload: {
            id,
            ...nota
        }
    }
}


export const setNotas = (notas) => {
    return {
        type: types.cargarNotas,
        payload: notas
    }
}

export const cargarNotas = (id) => {
   return async(dispatch) => {
    const notasTotales = await cargaNotas(id)
    dispatch(setNotas(notasTotales))
   }
}


export const editarNotaFirebase = (nota) => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        if(!nota.url) {
            delete nota.url
        }
        const noteFirestore = {...nota}
        delete noteFirestore.id
        await db.doc(`${uid}/journal/notas/${nota.id}`).update(noteFirestore).then(() => {
            Swal.fire({
                title: 'Nota Actualizada',
                icon: 'success'
            })
        })
        dispatch(actualizarNotas(nota.id, nota))
        
    }

}

const actualizarNotas = (id,nota) => ({
    type: types.actualizarNota,
    payload: {
        id,
        nota
    }
})


export const subirImagen = (archivo) => {
    return async(dispatch, getState) => {

        const notaActiva = getState().notas.active;
        Swal.fire({
            title: 'Actualizando...',
            text: 'Espera un momento',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        })

        const URL = await subirArchivo(archivo)
        notaActiva.url = URL;
       dispatch(editarNotaFirebase(notaActiva))
        Swal.close();



    }

}

export const borrarNota = (id) => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        db.doc(`${uid}/journal/notas/${id}`).delete()
        dispatch(notasBorradas(id))
    }
}

const notasBorradas = (id) => ({
    type: types.borrarrNota,
    payload: id
})