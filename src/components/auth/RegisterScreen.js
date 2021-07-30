import React from 'react'
import { Link } from 'react-router-dom'
import fondo from '../../assets/pexels-ivan-samkov-7212857.jpg'

export const RegisterScreen = () => {
    return (
        <>
        <div className="auth__login">
            <form className="auth__form">
                <h1 className="auth__title">Crea una Cuenta</h1>
                <input 
                    type="text"
                    className="auth__input"
                    placeholder="Nombre"
                />
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
                <input 
                    type="password"
                    className="auth__input"
                    placeholder="Password Again"

                />
                <button
                    className="boton boton-1">
                    Registrarse
                </button>
                <Link
                    to="/auth/login"
                    className="boton">
                    ¿No tienes una Cuenta?
                </Link>
            </form>
        </div>
        <div className="auth__imagen"></div>
        </>
    )
}
