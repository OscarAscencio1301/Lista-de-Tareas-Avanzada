
import { Redirect, Route } from 'react-router-dom'

export const RutaPublica = ({
    autenticado,
    component: Component,
    ...res
}) => {
    return (
      <Route {...res} component={props => !autenticado ? <Component {...props}/> : <Redirect to="/" /> }/>
    )
}
