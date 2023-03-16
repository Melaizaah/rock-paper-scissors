import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Game from "./Game"
import Result from "./Result"

function Main() {

    const [gameRounds, setGameRounds] = useState(0);
    const [outcome, setOutcome] = useState("");
    const [yourScore, setYourScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    useEffect(() => {
        if(outcome === "lost") {
           setComputerScore(computerScore + 1);
       } else if (outcome === "won"){
           setYourScore(yourScore + 1);
       }
    }, [gameRounds])

    return (

        <Router>

            <Routes>
                <Route path='/' element={<Game outcome={outcome} setOutcome={setOutcome} gameRounds={gameRounds} setGameRounds={setGameRounds}/>} />
            
                <Route path="/result" element={ <Result outcome={outcome} yourScore={yourScore} computerScore={computerScore}/>} />
            </Routes>
           
        </Router>

    )
}

export default Main;