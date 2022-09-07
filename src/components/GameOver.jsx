import {useContext} from 'react';
import {QuizContext} from '../context/quiz';

import WellDone from '../img/welldone.svg';
import './GameOver.css';
function GameOver() {
  return (
    <div id='gameover'>
      <h2>Fim de jogo</h2>
      <p>Pontuação: x</p>
      <p>Você acertou Y de Z perguntas.</p>
      <img src={WellDone} alt="Fim do quiz" />
      <button>Reiniciar</button>
    </div>
  )
}

export default GameOver