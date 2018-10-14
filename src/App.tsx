// tslint:disable:no-console
import React, { Component } from 'react';

import GameBoard            from './components/GameBoard';
import PreGame              from './components/PreGame';
import Stalemate            from './components/Stalemate';
import Winner               from './components/Winner';

import computerMove         from './computerMove';
import referee              from './referee';

import { AppState }         from './types';

import './App.css';

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = this.getInitialState();

        this.handleMoveClick = this.handleMoveClick.bind(this);
        this.setPlayers      = this.setPlayers.bind(this);
        this.startOver       = this.startOver.bind(this);
    }

    getInitialState = () => ({
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        currentPlayer: '',
        gameState: 'preGame',
        isComputerMove: false,
        moveCount: 1,
        players: 0,
    })

    setPlayers = (event: React.MouseEvent<HTMLElement>) => this.setState({
        gameState: 'game',
        players: parseInt((event.target as any).id, 10)
    })

    handleMoveClick = (event: React.MouseEvent<HTMLElement>) => {
        if (this.state.isComputerMove) {
            return;
        }

        const column = (event.target as any).attributes.getNamedItem('data-column').value;
        const row    = (event.target as any).attributes.getNamedItem('data-row').value;

        this.submitMove(row, column);
    }

    submitMove = (row: number, column: number) => {
        const currentPlayer = this.state.moveCount % 2 ? 'x' : 'o';
        const board = this.state.board.slice(0);

        board[row][column] = currentPlayer;

        const winner = referee(board) ? 'postGame' : 'game';

        const stalemate = this.state.moveCount === 9 && winner === 'game';

        const gameState = stalemate ? 'stalemate' : winner;

        const isComputerMove = this.state.players === 1 && currentPlayer === 'x';

        console.log(isComputerMove);
        
        this.setState({
            moveCount: this.state.moveCount + 1,
            board,
            gameState,
            currentPlayer,
            isComputerMove
        });
    }

    startOver = () => (
        this.setState(this.getInitialState())
    )

    componentDidUpdate = () => {
        const followUpMove = this.state.gameState === 'game' ? computerMove(this.state.players, this.state.board, this.state.moveCount) : false;
        
        if (followUpMove) {
            setTimeout(() => this.submitMove(followUpMove.row, followUpMove.column), 1500);
        }
    }

    controls = () => {
        switch (this.state.gameState) {
            case 'preGame':
                return <PreGame setPlayers={this.setPlayers} />;
            case 'postGame':
                return <Winner currentPlayer={this.state.currentPlayer} startOver={this.startOver} />;
            case 'stalemate':
                return <Stalemate startOver={this.startOver} />;
            default:
                return <NextMove currentPlayer={this.state.currentPlayer} isComputerMove={this.state.isComputerMove} />;
        }
    }

    render = () => (
        <div>
            {this.controls()}
            <GameBoard boardState={this.state.board} makeMove={this.handleMoveClick} />
        </div>
    )
}

export default App;

interface NextMove {
    currentPlayer: string, 
    isComputerMove: boolean
}

const NextMove = ({ currentPlayer, isComputerMove}: NextMove) => {
    const nextMove = currentPlayer === 'x' ? 'o' : 'x';

    return <div className="controls">next move: {nextMove} {isComputerMove ? ' (computer)' : ''}</div>;
};