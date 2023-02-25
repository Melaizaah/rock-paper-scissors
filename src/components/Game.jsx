import React, { useState, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Game() {

    const history = useNavigate("/");
    const [choice, setChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");

    const playGame = () => {
        setComputerChoice()
        console.log(computerChoice, choice)
        if(computerChoice === choice){
            console.log("Split")
        } else if (computerChoice === "rock" && choice === "paper"){
            console.log("You won!")
        } else if (computerChoice === "rock" && choice === "scissor"){
            console.log("You lost :(")
        } else if (computerChoice === "paper" && choice === "rock"){
            console.log("You lost :(")
        } else if (computerChoice === "paper" && choice === "scissor"){
            console.log("You won!")
        } else if (computerChoice === "scissor" && choice === "rock"){
            console.log("You won!")
        } else if (computerChoice === "scissor" && choice === "paper"){
            console.log("You lost :(")
        }
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