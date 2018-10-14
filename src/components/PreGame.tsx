import React from 'react';

interface PreGameProps {
    setPlayers: (event: React.MouseEvent<HTMLElement>) => void;
}

const PreGame = ({ setPlayers }: PreGameProps) => (
    <div className="preGame">
        <h1 className="headline">Tic Tac Toe</h1>
        <p>Choose the number of human players:</p> 
        <div>
            <button 
                id="1"
                onClick={setPlayers}
                className="playerSelect"
            >
                1
            </button>
            <button 
                id="2"
                onClick={setPlayers}
                className="playerSelect"
            >
                2
            </button>
        </div>
    </div>
);

export default PreGame;