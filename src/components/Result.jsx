import React  from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Result({ outcome, yourScore, computerScore }) {

    const history = useNavigate("/result");
   

    const playAgain = () => {
        console.log(`Computers Score: ${computerScore}`)
        console.log(`Your score: ${yourScore}`)
        console.log("You want to play again!")
        history("/")
    }

    
    
    return (
        <div className="result-container">
            <label className="result-label">Result of match: {outcome? outcome : "Didn't choose anything lol"}</label>
            <label className="label-score computer-score-label">Computers Score: {computerScore}</label>
            <label className="label-score your-score-label">Your Score: {yourScore}</label>
            <button className="play-again-btn" onClick={playAgain}>Play again?</button>
        </div>   

    )
}

export default Result;