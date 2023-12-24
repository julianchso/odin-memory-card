import React from 'react';
import '../../styles/playArea.css';
import cardBack from '../assets/pokemon-card-back.png';

export default function PlayArea() {
  let numberOfCards = 0;

  return (
    <div className='playAreaContainer'>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
      <button>
        <img src={cardBack} alt='' className='cardBack' />
      </button>
    </div>
  );
}
