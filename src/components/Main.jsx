import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Game from "./Game"
import Result from "./Result"

function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/">
                    <Game />
                </Route>
            
                <Route path="/result">
                    <Result />
                </Route>
            </Routes>
           
        </Router>

    )
}

export default Main;