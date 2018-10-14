import React from 'react';
import { Board, Row } from '../types';

const XPosition = () => <div className="position">X</div>;
const OPosition = () => <div className="position">O</div>;

interface GameBoardState {
    boardState: Board;
    makeMove: (event: React.MouseEvent<HTMLElement>) => void;
}

const GameBoard = ({ boardState, makeMove }: GameBoardState) => {
    const makeRow = (rowState: Row, rowIndex: number) => rowState.map((position, columnIndex) => {
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
                    data-row={rowIndex}
                    data-column={columnIndex}
                />;
        }
    });

    const makeBoard = boardState.map((row, index) => makeRow(row, index));

    return <div className="gameBoard">
        {makeBoard}
    </div>;
};

export default GameBoard;