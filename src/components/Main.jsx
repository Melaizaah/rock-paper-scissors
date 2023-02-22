import React from "react"
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom"
import Game from "./Game"
import Result from "./Result"

function Main() {


    return (
        <Router>

            <Switch>
                <Route exact path="/">
                    <Game />
                </Route>
            
                <Route exact path="/result">
                    <Result />
                </Route>
            </Switch>
           
        </Router>

    )
}

export default Main;