import React from 'react';

interface Stalemate {
    startOver: (event: React.MouseEvent<HTMLElement>) => void;
}
const Stalemate = ({ startOver }: Stalemate) => (
    <div className="gameOver">
        <p className="label">Stalemate!</p>
        <p>Both players are equally good. Or equally bad, depending on how you look at it. <a onClick={startOver}>Start a new game</a>.</p>
    </div>
);

export default Stalemate;