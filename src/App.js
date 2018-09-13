import React, { Component } from 'react';

import PreGame              from './components/PreGame';
import GameBoard            from './components/GameBoard';
import Winner               from './components/Winner';
import Stalemate            from './components/Stalemate';
import referee              from './referee';
import computerMove         from './computerMove';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.handleMoveClick = this.handleMoveClick.bind(this);
        this.setPlayers      = this.setPlayers.bind(this);
        this.startOver       = this.startOver.bind(this);
    }

    getInitialState = () => ({
        gameState: 'preGame',
        currentPlayer: '',
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        moveCount: 1,
        isComputerMove: false
    });

    setPlayers = event => this.setState({
        gameState: 'game',
        players: event.target.id
    });

    handleMoveClick = event => {
        if (this.state.isComputerMove) {
            return;
        }
        
        const row    = event.target.attributes.row.value;
        const column = event.target.attributes.column.value;

        this.submitMove(row, column);
    }

    submitMove = (row, column) => {
        const currentPlayer = this.state.moveCount % 2 ? 'x' : 'o';
        const board = this.state.board.slice(0);

        board[row][column] = currentPlayer;

        const winner = referee(board) ? 'postGame' : 'game';

        const stalemate = this.state.moveCount === 9 && winner === 'game';

        const gameState = stalemate ? 'stalemate' : winner;

        const isComputerMove = this.state.players === '1' && currentPlayer === 'x';

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
    );

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
            <GameBoard state={this.state.board} makeMove={this.handleMoveClick} />
        </div>
    );
}

export default App;

const NextMove = ({ currentPlayer, isComputerMove }) => {
    const nextMove = currentPlayer === 'x' ? 'o' : 'x';

    return <div className="controls">next move: {nextMove} {isComputerMove ? ' (computer)' : ''}</div>
}