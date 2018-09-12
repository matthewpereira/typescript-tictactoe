export function areEqual() {
    var len = arguments.length;
    for (var i = 1; i < len; i++) {
        if (arguments[i] === null || arguments[i] !== arguments[i - 1]) {
            return false;
        }
    }

    return true;
}

const evaluateRow = row => (
    row.filter(column => column !== '').length === 3 &&
    areEqual(row[0], row[1], row[2])
);

export const validRow = board => (
    board.filter(row => (
        evaluateRow(row))
    ).length !== 0
);

export const validDiagonal = board => (
        areEqual(board[0][0], board[1][1], board[2][2]) ||
        areEqual(board[0][2], board[1][1], board[2][0])
    );

export const validColumn = board => {
    for (let col = 0; col < 3; ++col) {
        if (areEqual(board[0][col], board[1][col], board[2][col])) {
            return true;
        }
    }

    return false;
};

export const referee = board => (
    validRow(board) ||
    validDiagonal(board) ||
    validColumn(board)
);

export default referee;