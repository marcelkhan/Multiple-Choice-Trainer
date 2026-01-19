import { useEffect, useMemo, useState } from 'react'
import QUESTIONS from './data/questions'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndices, setSelectedIndices] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const totalQuestions = QUESTIONS.length
  const currentQuestion = QUESTIONS[currentIndex]
  const isLastQuestion = currentIndex === totalQuestions - 1

  const progressValue = useMemo(() => {
    const answered = answers.length
    return Math.round((answered / totalQuestions) * 100)
  }, [answers.length, totalQuestions])

  const handleCheckAnswer = () => {
    if (selectedIndices.length === 0 || showResult) return
    const isCorrect =
      selectedIndices.length === currentQuestion.correctIndices.length &&
      selectedIndices.every((index) =>
        currentQuestion.correctIndices.includes(index)
      )
    setShowResult(true)
    setScore((prev) => prev + (isCorrect ? 1 : 0))
    setAnswers((prev) => [
      ...prev,
      { questionId: currentQuestion.id, selectedIndices, isCorrect }
    ])
  }

  const handleNext = () => {
    if (!showResult) return
    if (isLastQuestion) return
    setCurrentIndex((prev) => prev + 1)
    setSelectedIndices([])
    setShowResult(false)
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setSelectedIndices([])
    setShowResult(false)
    setScore(0)
    setAnswers([])
  }

  if (!currentQuestion) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <div>
            <p className="eyebrow">Multiple Choice Trainer</p>
            <h1>Trainiere dein Wissen</h1>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-pressed={isDark}
              aria-label={isDark ? 'Zu hellem Modus wechseln' : 'Zu dunklem Modus wechseln'}
            >
              <span className="theme-icon" aria-hidden="true">
                {isDark ? '☀️' : '🌙'}
              </span>
              <span className="theme-label">
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
            <div className="score">
              <span className="badge">Punkte</span>
              <strong>
                {score} / {totalQuestions}
              </strong>
            </div>
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
          {currentQuestion.correctIndices.length > 1 && (
            <p className="selection-hint">Mehrfachauswahl möglich</p>
          )}
          <div className="options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndices.includes(index)
              const isCorrect =
                showResult && currentQuestion.correctIndices.includes(index)
              const isIncorrect =
                showResult && isSelected && !currentQuestion.correctIndices.includes(index)

              return (
                <button
                  key={option}
                  type="button"
                  className={`option${isSelected ? ' selected' : ''}${
                    isCorrect ? ' correct' : ''
                  }${isIncorrect ? ' incorrect' : ''}`}
                  onClick={() =>
                    !showResult &&
                    setSelectedIndices((prev) =>
                      prev.includes(index)
                        ? prev.filter((item) => item !== index)
                        : [...prev, index]
                    )
                  }
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
                selectedIndices.length === currentQuestion.correctIndices.length &&
                selectedIndices.every((index) =>
                  currentQuestion.correctIndices.includes(index)
                )
                  ? 'success'
                  : 'error'
              }`}
            >
              {selectedIndices.length === currentQuestion.correctIndices.length &&
              selectedIndices.every((index) =>
                currentQuestion.correctIndices.includes(index)
              )
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
              disabled={selectedIndices.length === 0 || showResult}
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
