import React from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { InternalRouter } from './InternalRouter'
import { RutaPrivada } from './RutaPrivada'
import { RutaPublica } from './RutaPublica'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <RutaPrivada exact path="/" component={JournalScreen} autenticado={true}/>
                    <RutaPublica path="/auth" component={InternalRouter} autenticado={true}/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>

        </Router>
        
    )
}
