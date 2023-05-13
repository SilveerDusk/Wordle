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

    }

    //add new guess to screen
    //update the isCorrect state if guess is correct
    //add one to turn
    const addNewGuess = () => {

    }

    //handle keyup event and track current guess
    //when user presses enter, the guess should be added
    const handleKeyup = ({key}) => {
        console.log(key)

    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}

export default useWordle