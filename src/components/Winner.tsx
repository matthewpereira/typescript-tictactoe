import React from 'react';

interface WinnerProps {
    currentPlayer: string;
    startOver: (event: React.MouseEvent<HTMLElement>) => void;
}

const Winner = ({ currentPlayer, startOver }: WinnerProps) => (
    <div className="gameOver">
        <p className="label">Winner!</p>
        <p>Player {currentPlayer.toUpperCase()} is the best. <a onClick={startOver}>Start a new game</a>.</p>
        
    </div>
);

export default Winner;