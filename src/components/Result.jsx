import React from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Result() {

    const history = useNavigate("/result");

    const playAgain = () => {
        console.log("You want to play again!")
        history("/")
    }

    return (
        <div>
            <button className="playAgainBtn" onClick={playAgain}>Play again?</button>
        </div>   

    )
}

export default Result