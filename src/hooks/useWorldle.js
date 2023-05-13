import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)

    //format a new guess into an array of letter objects
    //[{key: 'a'}, {color: 'green'}]
    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null
            }
        })

        return formattedGuess

    }

    //add new guess to screen
    //update the isCorrect state if guess is correct
    //add one to turn
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })
        setCurrentGuess('')
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

                        const formatted = formatGuess()
                        addNewGuess(formatted)

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