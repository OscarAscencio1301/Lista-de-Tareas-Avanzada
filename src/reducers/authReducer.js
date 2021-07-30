import { types } from "../types/types";


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.authlogin:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
            }
        case types.authlogged:
            return {}     
            
        default:
            return state;
    }
 
}