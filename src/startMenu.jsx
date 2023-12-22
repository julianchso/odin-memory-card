import React from 'react';
import Modal from './Modal';
import '../styles/startMenu.css';

export default function startMenu() {
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
              />
            </div>
            <div className='container-button'>
              <button className='button-play'>Play!</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
