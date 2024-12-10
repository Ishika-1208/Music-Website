import React from 'react';

function PlayerControls() {
  return (
    <div className="player-controls">
      <p>So High - Siddhu Moosewala</p>
      <div className="controls">
        <button>⏮️</button>
        <button>⏯️</button>
        <button>⏭️</button>
      </div>
      <input type="range" min="0" max="100" className="progress-bar" />
    </div>
  );
}

export default PlayerControls;
