import React, { useState, useEffect } from 'react'

function App() {
  const questions = [
    {
      question: '2 + 4 = ?',
      answers: [
        { answer: '3', isCorrect: false },
        { answer: '4', isCorrect: false },
        { answer: '6', isCorrect: true },
        { answer: '10', isCorrect: false },
      ],
    },
    {
      question: '7 * 5 = ?',
      answers: [
        { answer: '12', isCorrect: false },
        { answer: '35', isCorrect: true },
        { answer: '233', isCorrect: false },
        { answer: '41', isCorrect: false },
      ],
    },
    {
      question: '6 + 12 = ?',
      answers: [
        { answer: '17', isCorrect: false },
        { answer: '18', isCorrect: true },
        { answer: '12', isCorrect: false },
        { answer: '21', isCorrect: false },
      ],
    },
    {
      question: '25 / 5 = ?',
      answers: [
        { answer: '3', isCorrect: false },
        { answer: '7', isCorrect: false },
        { answer: '9', isCorrect: false },
        { answer: '5', isCorrect: true },
      ],
    },
    {
      question: '8 * 4 = ?',
      answers: [
        { answer: '78', isCorrect: false },
        { answer: '55', isCorrect: false },
        { answer: '20', isCorrect: false },
        { answer: '32', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1)
    }

    const nextQuetions = currentQuestion + 1
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions)
    } else {
      setShowScore(true)
    }
  }
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer =
      counter < 60 && setInterval(() => setCounter(counter + 1), 1000)

    if (showScore) {
      clearInterval(timer)
    }
    return () => clearInterval(timer)
  }, [counter, showScore])

  return (
    <>
      <h1 className='header'>Quizz App</h1>
      <div className='app'>
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
            <br />
            Spend time : {counter} sec
            {clearInterval(counter)}
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
              <div className='question-text'>
                {questions[currentQuestion].question}
              </div>
              <div className='timer'>Timer: {counter}</div>
            </div>

            <div className='answer-section'>
              {questions[currentQuestion].answers.map((answers) => (
                <button
                  onClick={() => handleAnswerButtonClick(answers.isCorrect)}>
                  {answers.answer}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
