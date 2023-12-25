import { useEffect, useState } from 'react';
import Modal from './components/Modal';
import StartMenu from './components/StartMenu';
import Gameboard from './components/Gameboard';

import '../styles/App.css';

function App() {
  const [gameStatus, setGameStatus] = useState('menu');
  const [numberOfCards, setNumberOfCards] = useState(10);

  function startGame() {
    setGameStatus('playing');
    console.log(`number of cards: ${numberOfCards}`);
  }

  return (
    <div>
      {gameStatus === 'menu' ? (
        <StartMenu
          startGame={startGame}
          numberOfCards={numberOfCards}
          onChangeNumberOfCards={(e) => setNumberOfCards(e.target.value)}
        />
      ) : (
        <Gameboard />
      )}
    </div>
  );
}

export default App;
