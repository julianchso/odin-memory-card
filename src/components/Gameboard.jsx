import React from 'react';
import Scoreboard from './Scoreboard';
import '../../styles/gameboard.css';

export default function Gameboard() {
  return (
    <>
      <div className='gameboard'>
        <div className='header'>
          <Scoreboard />
        </div>
      </div>
      ;
    </>
  );
}
