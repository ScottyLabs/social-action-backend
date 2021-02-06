import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { BusinessesList, BusinessesInsert, BusinessesUpdate, pipeBus } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/businesses/list" exact component={BusinessesList} />
                <Route path="/businesses/create" exact component={BusinessesInsert} />
                <Route
                    path="/businesses/update/:id"
                    exact
                    component={BusinessesUpdate}
                />
                <Route path="/businesses/get" exact component={pipeBus} />
            </Switch>
        </Router>
    )
}

export default App