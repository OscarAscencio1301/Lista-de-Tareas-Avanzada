import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginEmailPassword, loginGoogle } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'


export const LoginScreen = () => {
    const {loading} = useSelector(state => state.ui)
   

    const [valores, cambioInput] = useForm({
        email: '',
        password: ''
    })
    
    const dispatch = useDispatch()
    
    
    const inicioSesion = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password))
        // console.log(email, password)
    }
    const {email, password} = valores

    const iniciarGoogle = () => {
        dispatch(loginGoogle())
    }
    return (
        <>
        <div className="auth__login">
            <form className="auth__form-login" onSubmit={inicioSesion}>
                <h1 className="auth__title">Inicia Sesión</h1>
                <input 
                    type="email"
                    className="auth__input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={cambioInput}
                />
                <input 
                    type="password"
                    className="auth__input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={cambioInput}

                />
                <button
                    type="submit"
                    disabled={loading}
                    className="boton boton-1 animate__animated animate__fadeInLeft">
                    Iniciar Sesión
                </button>


              
                <Link
                    to="/auth/register"
                    className="boton">
                    ¿No tienes una Cuenta?
                </Link>
            </form>

    
            <button
                    onClick={iniciarGoogle}
                    className="boton boton-goole animate__animated animate__fadeInLeft">
                    Iniciar Sesión con Google
                
            </button>
              
            
            
        </div>
        <div className="auth__imagen"></div>
        </>
    )
}
