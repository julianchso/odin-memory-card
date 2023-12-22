import React from 'react';
import '../../styles/scoreboard.css';

export default function Scoreboard() {
  return (
    <>
      <div className='scoreboard'>
        <p className='high-score'>
          High Score: <span>9999</span>
        </p>
        <p className='current-score'>
          Current Score: <span>123</span>
        </p>
      </div>
    </>
  );
}
