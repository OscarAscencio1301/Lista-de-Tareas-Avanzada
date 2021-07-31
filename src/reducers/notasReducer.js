import { types } from "../types/types";

const valoresIniciales = {
    notas: {},
    active: null
}

export const notasReducer = (state = valoresIniciales, action) => {
    switch (action.type) {
        case types.crearNota:
        return {
            ...state,
            active: action.payload
        }
        
        
    
        default:
            return state;
            
    }

}