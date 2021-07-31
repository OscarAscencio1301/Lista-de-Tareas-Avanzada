import { types } from "../types/types"

export const crearNota = (titulo, cuerpo) => {
    return {
        type: types.crearNota,
        payload: {
            titulo,
            cuerpo
        }
    }
}