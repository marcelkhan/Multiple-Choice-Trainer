import { useMemo, useState } from 'react'
import QUESTIONS from './data/questions'
import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const totalQuestions = QUESTIONS.length
  const currentQuestion = QUESTIONS[currentIndex]
  const isLastQuestion = currentIndex === totalQuestions - 1

  const progressValue = useMemo(() => {
    const answered = answers.length
    return Math.round((answered / totalQuestions) * 100)
  }, [answers.length, totalQuestions])

  const handleCheckAnswer = () => {
    if (selectedIndex === null || showResult) return
    const isCorrect = selectedIndex === currentQuestion.correctIndex
    setShowResult(true)
    setScore((prev) => prev + (isCorrect ? 1 : 0))
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedIndex, isCorrect }
    ])
  }

  const handleNext = () => {
    if (!showResult) return
    if (isLastQuestion) return
    setCurrentIndex((prev) => prev + 1)
    setSelectedIndex(null)
    setShowResult(false)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedIndex(null)
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  if (!currentQuestion) {
    return null
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div>
            <p className="eyebrow">Multiple Choice Trainer</p>
            <h1>Trainiere dein Wissen</h1>
          </div>
          <div className="score">
            <span className="badge">Punkte</span>
            <strong>
              {score} / {totalQuestions}
            </strong>
          </div>
        </header>

        <section className="progress">
          <div className="progress-info">
            <span>
              Frage {currentIndex + 1} von {totalQuestions}
            </span>
            <span>{progressValue}% erledigt</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressValue}%` }}
            />
          </div>
        </section>

        <section className="card">
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index
              const isCorrect =
                showResult && index === currentQuestion.correctIndex
              const isIncorrect =
                showResult && isSelected && index !== currentQuestion.correctIndex

              return (
                <button
                  key={option}
                  type="button"
                  className={`option${isSelected ? ' selected' : ''}${
                    isCorrect ? ' correct' : ''
                  }${isIncorrect ? ' incorrect' : ''}`}
                  onClick={() => !showResult && setSelectedIndex(index)}
                >
                  <span className="option-label">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </button>
              )
            })}
          </div>

          {showResult && (
            <div
              className={`feedback ${
                selectedIndex === currentQuestion.correctIndex
                  ? 'success'
                  : 'error'
              }`}
            >
              {selectedIndex === currentQuestion.correctIndex
                ? 'Richtig!'
                : 'Leider falsch.'}
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="actions">
            <button
              type="button"
              className="primary"
              onClick={handleCheckAnswer}
              disabled={selectedIndex === null || showResult}
            >
              Antwort prüfen
            </button>
            {!isLastQuestion && (
              <button
                type="button"
                className="secondary"
                onClick={handleNext}
                disabled={!showResult}
              >
                Nächste Frage
              </button>
            )}
          </div>
        </section>

        {showResult && isLastQuestion && (
          <section className="summary">
            <h3>Auswertung</h3>
            <p>
              Du hast {score} von {totalQuestions} Fragen korrekt beantwortet.
            </p>
            <button type="button" className="primary" onClick={handleRestart}>
              Neu starten
            </button>
          </section>
        )}
      </div>
    </div>
  )
}

export default App
