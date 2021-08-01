import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { InternalRouter } from './InternalRouter'
import { RutaPrivada } from './RutaPrivada'
import { RutaPublica } from './RutaPublica'
import {firebase} from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'
import { cargarNotas } from '../actions/notas'


export const AppRouter = () => {
    const dispatch = useDispatch()
    const [espera, setespera] = useState(true);
    const [autenticado, setautenticado] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setautenticado(true)
                dispatch(cargarNotas(user.uid))
            }else{
                setautenticado(false)
            }
            setespera(false)
        })

    },[dispatch, setespera, setautenticado])

    if(espera) {
        return (
            <h1>Espere</h1>
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <RutaPrivada exact path="/" component={JournalScreen} autenticado={autenticado}/>
                    <RutaPublica path="/auth" component={InternalRouter} autenticado={autenticado}/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </Router>
        
    )
}
