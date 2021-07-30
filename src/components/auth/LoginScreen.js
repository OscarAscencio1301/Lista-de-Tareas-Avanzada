import React from 'react'
import { Link } from 'react-router-dom'
import fondo from '../../assets/pexels-ivan-samkov-7212857.jpg'

export const LoginScreen = () => {
    return (
        <>
        <div className="auth__login">
            <form className="auth__form">
                <h1 className="auth__title">Inicia Sesión</h1>
                <input 
                    type="email"
                    className="auth__input"
                    placeholder="Email"
                />
                <input 
                    type="password"
                    className="auth__input"
                    placeholder="Password"

                />
                <button
                    className="boton boton-1">
                    Iniciar Sesión
                </button>
                <div className="goggle">
                <img src="https://foroalfa.org/imagenes/ilustraciones/g-1.jpg" alt="google" className="logo__google"/>
                <button
                    className="boton boton-goole">
                    Iniciar Sesión con Google
                </button>
                </div>
                <Link
                    to="/auth/register"
                    className="boton">
                    ¿Ya tienes una Cuenta?
                </Link>
            </form>
        </div>
        <div className="auth__imagen"></div>
        </>
    )
}
