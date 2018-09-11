export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const validateMove = (row, column, board) => board[row][column] === '';

const notYourTurn = (players, moveCount) => players !== '1' || moveCount % 2 === 1 || moveCount > 8;

export const computerMove = (players, board, moveCount) => {
    if (notYourTurn(players, moveCount)) {
        return false;
    }

    let row;
    let column;

    // Generate a bunch of moves until you have a valid move
    while (true) {
        row    = getRandomInt(3);
        column = getRandomInt(3);

        if (validateMove(row, column, board)) {            
            break;
        } 
    }
    
    return {
        row, 
        column
    }
}

export default computerMove;