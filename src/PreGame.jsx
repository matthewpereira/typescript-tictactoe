import React from 'react';

const PreGame = ({ setPlayers }) => (
    <div className="gameBoard preGame">
        <p className="label">How many human players?</p> 
        <div>
            <button id='1' onClick={setPlayers}>1</button>
            <button id='2' onClick={setPlayers}>2</button>
        </div>
    </div>
);

export default PreGame;