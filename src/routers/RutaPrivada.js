
import { Redirect, Route } from 'react-router-dom'

export const RutaPrivada = ({
    autenticado,
    component: Component,
    ...res
}) => {
    return (
      <Route {...res} component={props => autenticado ? <Component {...props}/> : <Redirect to="auth/login" />}/>
    )
}
