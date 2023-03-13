import React, { useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Game({ outcome, setOutcome }) {

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
 
    return(
        <>
        <div className="grid-container">
            <div >
                <button className="choice-button"><img className="handImage" src={require("../images/rock-hand.png")} alt="" onClick={() => playChoice("rock")}/>Rock</button>
            </div>
            <div>
                
                <button className="choice-button" ><img className="handImage" src={require("../images/paper-hand.png")} alt="" onClick={() => playChoice("paper")}/>Paper</button>
            </div>
            <div>
                
                <button className="choice-button"><img className="handImage" src={require("../images/scissor-hand.png")} alt="" onClick={() => playChoice("scissor")}/>Scissor</button>
            </div>
        </div>
        <button className="playButton" onClick={playGame}>Play!!</button>
        </>
    )
}

export default Game;