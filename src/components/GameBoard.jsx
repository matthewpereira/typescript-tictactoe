import React from 'react';

const XPosition = () => <div className="position">X</div>;
const OPosition = () => <div className="position">O</div>;

const GameBoard = ({ state, makeMove }) => {
    const makeRow = (rowState, rowIndex) => rowState.map((position, columnIndex) => {
        switch(position) {
            case 'x':
                return <XPosition />;
            case 'o':
                return <OPosition />;
            default:
                return <button 
                    className="availablePosition"
                    key={rowIndex + columnIndex}
                    onClick={makeMove}
                    row={rowIndex}
                    column={columnIndex}
                />
        }
    });

    const makeBoard = state.map((row, index) => makeRow(row, index));

    return <div className="gameBoard">
        {makeBoard}
    </div>
};

export default GameBoard;