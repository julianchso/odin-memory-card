import React from 'react';
import '../../styles/playArea.css';
import cardBack from '../assets/pokemon-card-back.png';

export default function PlayArea() {
  let numberOfCards = 10;
  const numberOfCardsArr = [];

  for (let i = 0; i < numberOfCards; i++) {
    numberOfCardsArr.push(
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
    );
  }

  return <div className='playAreaContainer'>{numberOfCardsArr}</div>;
}
