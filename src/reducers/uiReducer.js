import { types } from "../types/types";

export const uiReducer = (state ={error: null, loading: false}, action) => {
    switch (action.type) {
        case types.setError:
            return {
                ...state,
                error: action.payload
            }
        case types.removeError:
            return {
                ...state,
                error: null
                }
            
        case types.loadingStart:
            return{
                ...state,
                loading: true
            }
        case types.loadingFinish:
            return{
                ...state,
                loading: false
            }
    
        default:
            return state;
    }

}