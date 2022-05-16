import { fetchQuizQuestions } from './API';
import './App.css';
import QuestioCard from './components/QuestionCard';
import { Difficulty, QuestionState } from './API';
import { useState } from 'react';

//styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string,
  answer: string,
  correctAnswer: string,
  isCorrect: boolean
}

function App() {
  const QUESTIONS_AMOUNT = 7;
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [loading, setLoading] = useState(false)
  const [gameOver, setGameOver] = useState(true)
  const [score, setScore] = useState(0)

  const [number, setNumber] = useState(0)

  async function startQuiz() {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(QUESTIONS_AMOUNT, Difficulty.HARD)
    setQuestions(newQuestions)
    setScore(0)
    setUserAnswers([])
    setNumber(0)
    setLoading(false)
   }
  
  function checkAnswer(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if (correct) setScore(prev => prev + 1)

      const userAnswer = {
        question: questions[number].question,
        answer: answer,
        isCorrect: correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev, userAnswer])
    }
   }

  function nextQuestion() {
    const nextQuestion = number + 1
    if (nextQuestion === QUESTIONS_AMOUNT) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
   }
  
  console.log(gameOver);
  
  
  return (
    <Wrapper className="App">
      <GlobalStyle />
      <h1>Ultimate Anime Quiz</h1>
      {
       ( gameOver || userAnswers.length === QUESTIONS_AMOUNT) &&
        <button className='btn--start' onClick={startQuiz}> start</button>
      }
      {!gameOver && <p className='score'>Score: {score} </p>}
      {loading && <p>Loading question ...</p>}
      {(!loading && !gameOver) &&
        <QuestioCard
          questionNum={number + 1}  
          totalQuestions={QUESTIONS_AMOUNT}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      }
      {!gameOver && !loading && number !== QUESTIONS_AMOUNT - 1 && userAnswers.length == number + 1 &&
      <button className='btn--next' onClick={nextQuestion}> Next question</button>
      }
    </Wrapper>
  );
}

export default App;
