export const validRow = row => (
        row.filter(column => column !== '').length === 3 && 
        row[0] === row[1] && 
        row[1] === row[2] 
    );

export const validDiagonal = board => (
        (board[0][0] === board[1][1] && board[1][1] === board[2][2]) || 
        (board[0][2] === board[1][1] && board[1][1] === board[2][0])
    ) ? board[1][1] : false;

export const validColumn = board => {
    let valid = false;

    for (let col = 0; col < 3; ++col) {
        if (
            board[0][col] === board[1][col] && 
            board[1][col] === board[2][col] && 
            board[0][col] !== ''
        ) {
            valid = true;
        }
    }
    
    return valid;
};

const referee = newBoardState => {
    const rowFound = newBoardState.filter(row => validRow(row)).length ? true : false;
    const diagonalFound = validDiagonal(newBoardState) ? true : false;
    const columnFound = validColumn(newBoardState);
    
    return rowFound || diagonalFound || columnFound;
}

export default referee;