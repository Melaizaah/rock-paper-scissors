import React from "react"
import { useHistory } from "react-router-dom";
import "./styles.css"

function Result() {

    const history = useHistory("/result");

    const playAgain = () => {
        console.log("You want to play again!")
        history.push("/")
        history.go("/")
    }

    return (
        <div>
            <button className="playAgainBtn" onClick={playAgain}>Play again?</button>
        </div>   

    )
}

export default Result