import React, { useState, useCallback } from "react"
import "./styles.css";

function Game() {

    const [choice, setChoice] = useState("");

    const playGame = () => {
        console.log("I have chosen: " + choice)
    }

    const playChoice = useCallback((selected) => {
        setChoice(selected);
    }, [])



    return(
        <>
        <div className="grid-container">
            <button className="choice-button" onClick={() => playChoice("rock")}>Rock</button>
            <button className="choice-button" onClick={() => playChoice("paper")}>Paper</button>
            <button className="choice-button" onClick={() => playChoice("scissor")}>Scissor</button>
        </div>
        <button className="playButton" onClick={playGame}>Play!!</button>
        </>
    )
}

export default Game;