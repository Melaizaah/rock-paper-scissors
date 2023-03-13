import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Game from "./Game"
import Result from "./Result"

function Main() {

    const [outcome, setOutcome] = useState("");
    const [yourScore, setYourScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    useEffect(() => {
        if(outcome === "lost") {
           setComputerScore(computerScore + 1);
       } else if (outcome === "won"){
           setYourScore(yourScore + 1);
       }
    }, [outcome])

    // const getScores = useCallback(() => {
    //     return [yourScore, computerScore];
    // }, [outcome])

    return (

        <Router>

            <Routes>
                <Route path='/' element={<Game outcome={outcome} setOutcome={setOutcome}/>} />
            
                <Route path="/result" element={ <Result yourScore={yourScore} computerScore={computerScore}/>} />
            </Routes>
           
        </Router>

    )
}

export default Main;