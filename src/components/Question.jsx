import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Question.css'
function Question() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  return (
    <div id='question'>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>Opções</p>
      </div>
      <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>Próxima</button>
    </div>
  )
}

export default Question