import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className='solution'>{solution}</p>
          <p>You found the solution in {turn} guesses!</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Whoops! You're out of guesses. You'll get it next time</h1>
          <p className='solution'>The Word was {solution}</p>
        </div>
      )}
    </div>
  )
}
