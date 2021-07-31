import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch } from 'react-redux'
import { colocarError, quitarError, registrarFirebase } from '../../actions/auth'
import Swal from 'sweetalert2'

export const RegisterScreen = () => {
    const dispatch = useDispatch()
    const [valores, cambioInput, reset] = useForm({
        nombre:'',
        email: '',
        password1: '',
        password2: ''
    })
    const {nombre, email, password1,password2} = valores
    const registro = (e) => {
        e.preventDefault();
        if(validar()){
            dispatch(quitarError())
            dispatch(registrarFirebase(email,password2,nombre))
            Swal.fire({
                title: 'Cuenta Creada',
                text: 'Ir al Login',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            reset();

            
        }

    }

    const validar = () => {
        if(nombre.trim().length === 0){
            dispatch(colocarError("Nombre Requerido"))

            Swal.fire({
                title: 'Error',
                text: 'Nombre Requerido',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return false;

        }else if(!validator.isEmail(email)){
            dispatch(colocarError("Email Incorrecto"))
            Swal.fire({
                title: 'Error',
                text: 'Email Incorrecto',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return false;

        }else if(password1 !== password2 || password1.length < 6){
            dispatch(colocarError("Contraseña debe de sey mayor a 6 caracteres"))
            Swal.fire({
                title: 'Error',
                text: 'Contraseña debe de sey mayor a 6 caracteres',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
            return false;
        }
        return true

    }
    return (
        <>
        <div className="auth__login">

            <form className="auth__form-register" onSubmit={registro}>
                <h1 className="auth__title">Crea una Cuenta</h1>
                <input 
                    type="text"
                    className="auth__input"
                    placeholder="Nombre"
                    value={nombre}
                    name="nombre"
                    onChange={cambioInput}
                />
                <input 
                    type="email"
                    className="auth__input"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={cambioInput}
                />
                <input 
                    type="password"
                    className="auth__input"
                    placeholder="Password"
                    value={password1}
                    name="password1"
                    onChange={cambioInput}

                />
                <input 
                    type="password"
                    className="auth__input"
                    placeholder="Password Again"
                    value={password2}
                    name="password2"
                    onChange={cambioInput}

                />
                <button
                    type="submit"
                    className="boton boton-1">
                    Registrarse
                </button>
                <Link
                    to="/auth/login"
                    className="boton">
                    ¿Ya tienes una Cuenta?
                </Link>
            </form>
        </div>
        <div className="auth__imagen"></div>
        </>
    )
}
