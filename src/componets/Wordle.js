import React, { useEffect } from 'react'
import useWordle from '../hooks/useWorldle'
import Grid from './Grid'
import Keypad from './Keypad'

export default function Wordle({solution}) {

    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup)

      if (isCorrect){
        console.log('YOU GOT IT!!!')
        window.removeEventListener('keyup', handleKeyup)
      }

      if (turn > 5) {
        console.log('Unlucky, I am sure you will get it next time')
        window.removeEventListener('keyup', handleKeyup)
      }

      return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup, isCorrect])

  return (
    <div>
    <div>Solution - {solution}</div>
    <div>Current Guess - {currentGuess}</div>
    <Grid currentGuess = {currentGuess} guesses = {guesses} turn = {turn}/>
    <Keypad usedKeys={usedKeys}/>
    </div>
  )
}
