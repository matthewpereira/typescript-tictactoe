import { Board, Row, Position } from './types';

export function areEqual(...args : any[]) {
    const len = args.length;
    for (let i = 1; i < len; i++) {
        if (arguments[i] === null || arguments[i] !== arguments[i - 1]) {
            return false;
        }
    }

    return true;
}

const evaluateRow = (row: Row) => (
    row.filter((column: Position) => column !== '').length === 3 &&
    areEqual(row[0], row[1], row[2])
);

export const validRow = (board: Board) => (
    board.filter(row => (
        evaluateRow(row))
    ).length !== 0
);

export const validDiagonal = (board: Board) => (
        areEqual(board[0][0], board[1][1], board[2][2]) ||
        areEqual(board[0][2], board[1][1], board[2][0])
    );

export const validColumn = (board: Board) => {
    for (let col = 0; col < 3; ++col) {
        if (areEqual(board[0][col], board[1][col], board[2][col])) {
            return true;
        }
    }

    return false;
};

export const referee = (board: Board) => (
    validRow(board) ||
    validDiagonal(board) ||
    validColumn(board)
);

export default referee;