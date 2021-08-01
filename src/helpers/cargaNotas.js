
import { db } from "../firebase/firebase-config"

export const cargaNotas = async(uid) => {
    const datosNota= await db.collection(`${uid}/journal/notas`).get()
    const notes = [];

    datosNota.forEach(datosInd => {
        notes.push({
            id: datosInd.id,
            ...datosInd.data()
        })
    })

    return notes;

}