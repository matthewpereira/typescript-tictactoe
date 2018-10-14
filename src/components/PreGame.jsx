import React from 'react';

const PreGame = ({ setPlayers }) => (
    <div className="preGame">
        <h1 className="headline">Tic Tac Toe</h1>
        <p className="label">How many human players?</p> 
        <div>
            <button 
                id='1' 
                onClick={setPlayers}
                className="playerSelect"
            >
                1
            </button>
            <button 
                id='2' 
                onClick={setPlayers}
                className="playerSelect"
            >
                2
            </button>
        </div>
    </div>
);

export default PreGame;