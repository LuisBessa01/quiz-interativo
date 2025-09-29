import { useState } from 'react'
import Header from './components/Header/index'
import './App.module.css'
import QuestionCard from './components/QuestionCard/index'
import questions from './data/questions'
import ScoreBoard from './components/ScoreBoard/index'

function App() {
  const [respostas, setRespostas] = useState(() => {
    const saved = localStorage.getItem("respostas")
    return saved ? JSON.parse(saved) : []
  })
  const [questaoAtual, setQuestaoAtual] = useState(0)


  function handleOptionClick(value) {
    setQuestaoAtual(questaoAtual + 1)
  }


  return (
    <>
      {questaoAtual < questions.length ?
        <>
          <Header questaoAtual={questaoAtual + 1} />
          <QuestionCard questao={questions[questaoAtual]} onClick={handleOptionClick} />
        </>
        : <ScoreBoard />}
    </>
  )
}

export default App
