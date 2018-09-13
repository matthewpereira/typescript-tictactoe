import React from 'react';

const Stalemate = ({ startOver }) => (
    <div className="gameOver">
        <p className="label">Stalemate!</p>
        <p>Both players are equally good. Or equally bad, depending on how you look at it. <a onClick={startOver}>Start a new game</a>.</p>
    </div>
);

export default Stalemate;