import React, { useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Game({ outcome, setOutcome, gameRounds, setGameRounds, setYourScore, setComputerScore }) {

    const history = useNavigate("/");
    const [choice, setChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");

    const playGame = () => {
        setComputerChoice()
        console.log(`Computer: ${computerChoice} | Yours: ${choice}`)
        let newOutcome;
        if(computerChoice === choice){
            newOutcome = "tie";
        } else if (computerChoice === "rock" && choice === "paper"){
            newOutcome = "won";
        } else if (computerChoice === "rock" && choice === "scissor"){
            newOutcome = "lost";
        } else if (computerChoice === "paper" && choice === "rock"){
            newOutcome = "lost";
        } else if (computerChoice === "paper" && choice === "scissor"){
            newOutcome = "won";
        } else if (computerChoice === "scissor" && choice === "rock"){
            newOutcome = "won";
        } else if (computerChoice === "scissor" && choice === "paper"){
            newOutcome = "lost";
        }
        setOutcome(newOutcome);
        setGameRounds(gameRounds + 1);
        console.log(newOutcome);
        history("/result")
    }

    useEffect(() => {
        const compute = Math.random();
        if (compute > 0.75){
            setComputerChoice("rock")
        } else if (compute > 0.5){
            setComputerChoice("paper")
        } else {
            setComputerChoice("scissor")
        }
    }, [computerChoice])


    const playChoice = useCallback((selected) => {
        setChoice(selected);
    }, [])

    const startOver = () => {
        setComputerScore(0);
        setYourScore(0);
    }
 
    return(
        <>
        <div className="grid-container">
            <button className="play-btn" onClick={playGame}>Play!!</button>
            
            <button className="choice-btn"><img className="hand-img" src={require("../images/rock-hand.png")} alt="" onClick={() => playChoice("rock")}/>Rock</button>
            
            <button className="choice-btn" ><img className="hand-img" src={require("../images/paper-hand.png")} alt="" onClick={() => playChoice("paper")}/>Paper</button>
            
            <button className="choice-btn"><img className="hand-img" src={require("../images/scissor-hand.png")} alt="" onClick={() => playChoice("scissor")}/>Scissor</button>

            <button className="start-over-btn" onClick={startOver}>Start over</button>
        </div>
       
        </>
    )
}

export default Game;