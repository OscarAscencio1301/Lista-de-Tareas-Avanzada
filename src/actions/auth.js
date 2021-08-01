import { types } from "../types/types"
import {firebase, google} from '../firebase/firebase-config'
import Swal from "sweetalert2"


// Login
export const login = (id, nombre) => {
    return {
        type: types.authlogin,
        payload: {
            uid: id,
            displayName: nombre
        }
    }
}


export const loginEmailPassword =  (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(({user}) => {
            dispatch(startLoading())
            dispatch(login(user.uid, user.displayName))
            dispatch(finishLoading())
        }).catch(error => {
            Swal.fire({
                title: 'Usuario no Registrado',
                text: 'Ir al Registro',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            dispatch(finishLoading())
        })
    }
    
}
export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google).then(({user}) =>{
            dispatch(login(user.uid, user.displayName))
        })

    }
}

// Register

export const registrarFirebase = (email, password, nombre) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(async({user}) => {
         
           await user.updateProfile({
               displayName: nombre
           })
           dispatch(login(user.uid, user.displayName))
           
        }).catch(({message}) =>{
            Swal.fire({
                title: 'Error',
                text: 'El correo ya esta registrado',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
         
        })
    }
}

export const colocarError = (mensaje) => {
   
    return {
        type: types.setError,
        payload: mensaje
    }
}

export const quitarError = () => {
    return {
        type: types.setError       
    }
}

// Loading en el Login

const startLoading = () => {
    return {
        type: types.loadingStart
    }
}

const finishLoading = () => {
    return {
        type: types.loadingFinish
    }
}

// Logout
const logout = () => {
    return {
        type: types.authlogged
    }
}

export const logoutFirebase = () => {
    return async(dispatch) => {
        await firebase.auth().signOut()
            dispatch(logout())
            dispatch(limpiarNotas())
           
        
    }
}

export const limpiarNotas = () => {
    
    return {
        type: types.limpiarNotas,
        
    }
}
