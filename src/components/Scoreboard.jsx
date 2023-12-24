import React from 'react';
import '../../styles/scoreboard.css';

export default function Scoreboard() {
  return (
    <>
      <div className='scoreboard'>
        <p className='high-score'>
          High Score: <span className='score-number'>9999</span>
        </p>
        <p className='current-score'>
          Current Score: <span className='score-number'>0</span>
        </p>
      </div>
    </>
  );
}
