import React, { useState, useCallback } from "react"
import { useHistory } from "react-router-dom"
import "./styles.css";

function Game() {

    const [choice, setChoice] = useState("");

    const playGame = () => {
        console.log("Since you have chosen: " + choice)
        const history = useHistory();
        history.push("/result")
    }

    const playChoice = useCallback((selected) => {
        setChoice(selected);
    }, [])
 
    return(
        <>
        <div className="grid-container">
            <div >
                <button className="choice-button"><img className="handImage" src={require("../images/rock-hand.png")} />Rock</button>
            </div>
            <div>
                
                <button className="choice-button" ><img className="handImage" src={require("../images/paper-hand.png")} onClick={() => playChoice("paper")}/>Paper</button>
            </div>
            <div>
                
                <button className="choice-button"><img className="handImage" src={require("../images/scissor-hand.png")}  onClick={() => playChoice("scissor")}/>Scissor</button>
            </div>
        </div>
        <button className="playButton" onClick={playGame}>Play!!</button>
        </>
    )
}

export default Game;