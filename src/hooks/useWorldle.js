import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    //format a new guess into an array of letter objects
    //[{key: 'a'}, {color: 'green'}]
    const formatGuess = () => {
        console.log("Formatting the guess - ", currentGuess)

    }

    //add new guess to screen
    //update the isCorrect state if guess is correct
    //add one to turn
    const addNewGuess = () => {

    }

    //handle keyup event and track current guess
    //when user presses enter, the guess should be added
    const handleKeyup = ({key}) => {
        
        /*conditions:
            - enter must be pressed
            - turn must be less than 5
            - length of currentGuess must be 5
            - the currentGuess cant be a prev guess
        */
        if (key === 'Enter'){
            if (turn < 6){
                if (currentGuess.length === 5){
                    if (!history.includes(currentGuess)){

                        formatGuess()

                    }  else {
                        console.log("You have already made this guess!")
                        return
                    }
                }  else {
                    console.log("All guesses must be five letters!")
                    return
                }
            } else {
                console.log("You are out of guesses!")
                return
            }
        }

        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            })
            return
        }

        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle