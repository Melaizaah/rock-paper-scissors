import React  from "react"
import { useNavigate } from "react-router-dom";
import "./styles.css"

function Result({ yourScore, computerScore }) {

    const history = useNavigate("/result");
    // const [scores, setScores] = useState([])

    // useEffect(() => {
    //     setScores(getScores);
    // }, [getScores])
   

    const playAgain = () => {
        console.log(`Computers Score: ${computerScore}`)
        console.log(`Your score: ${yourScore}`)
        console.log("You want to play again!")
        history("/")
    }

   
    // const updateScore = () => {

    //     console.log(`Computers Score: ${computerScore}`)
    //     console.log(`Your score: ${yourScore}`)
    // }
    
    
    return (
        <div>
            {/* <button onClick={updateScore}>Update</button> */}
            <button className="playAgainBtn" onClick={playAgain}>Play again?</button>
        </div>   

    )
}

export default Result;