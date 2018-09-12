import React     from 'react';
import Stalemate from './Stalemate';
import Winner    from './Winner';

const GameOver = ({ moveCount, currentPlayer, startOver }) => (
    moveCount === 10 ?
        <Stalemate startOver={startOver} /> :
        <Winner currentPlayer={currentPlayer} startOver={startOver} />
);

export default GameOver;