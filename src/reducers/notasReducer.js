import { types } from "../types/types";

const valoresIniciales = {
    notas: [],
    active: null
}

export const notasReducer = (state = valoresIniciales, action) => {
    switch (action.type) {
        case types.activanota:
        return {
            ...state,
            active: action.payload
        }
        case types.crearNota:
            return {
                ...state,
                notas: [ action.payload, ...state.notas ]
            }
        
        case types.cargarNotas:
        
            return {
                ...state,
                notas: [...action.payload]
                
            }
        case types.actualizarNota:
            return {
                ...state,
                notas: state.notas.map(nota => nota.id === action.payload.id ? action.payload.nota : nota)
            }
        
        case types.borrarrNota:
            return {
                ...state,
                active: null,
                notas: state.notas.filter(nota => nota.id !== action.payload)
            }    
        case types.limpiarNotas:
            return {
                ...state,
                active: null,
                notas: {}
            }

        default:
            return state;
            
    }

}