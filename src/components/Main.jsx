import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Game from "./Game"
import Result from "./Result"

function Main() {


    return (

        <Router>

            <Routes>
                <Route path='/' element={<Game/>} />
            
                <Route path="/result" element={ <Result />} />
            </Routes>
           
        </Router>

    )
}

export default Main;