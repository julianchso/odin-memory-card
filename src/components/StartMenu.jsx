import React from 'react';
import Modal from './Modal';
import '../../styles/startMenu.css';

export default function StartMenu({ startGame, numberOfCards, onChangeNumberOfCards }) {
  return (
    <>
      <Modal>
        <div className='modal--startMenu modal-content'>
          <span>How many cards do you want to play with?</span>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='container-numberOfCards'>
              <label htmlFor='numberOfCards'>Number of Cards</label>
              <input
                type='number'
                className='numberOfCards'
                id='numberOfCards'
                name='numberOfCards'
                placeholder='10'
                value={numberOfCards}
                onChange={onChangeNumberOfCards}
              />
            </div>
            <div className='container-button'>
              <button
                className='button-play'
                onClick={startGame}
                onSubmit={(e) => e.preventDefault}
              >
                Play!
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
