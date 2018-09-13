import React from 'react';

const Winner = ({ currentPlayer, startOver }) => (
    <div className="gameOver">
        <p className="label">Winner!</p>
        <p>Player {currentPlayer.toUpperCase()} is the best. <a onClick={startOver}>Start a new game</a>.</p>
        
    </div>
);

export default Winner;