import React, { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Game() {

    const history = useNavigate("/");
    const [choice, setChoice] = useState("");

    const playGame = () => {
        console.log("Since you have chosen: " + choice)
        history("/result")
    }

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