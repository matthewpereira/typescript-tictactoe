export interface AppState {
    board: Board;
    currentPlayer: string;
    gameState: string;
    isComputerMove: boolean;
    moveCount: number;
    players: number;
}

export type Board = Array<Row>;

export type Row = Array<Position>;

export type Position = string|null;