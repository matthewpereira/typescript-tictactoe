import React, { Component } from 'react';

import PreGame              from './components/PreGame';
import GameBoard            from './components/GameBoard';
import GameOver             from './components/GameOver';
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
        preGame: true,
        currentPlayer: '',
        board: [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ],
        moveCount: 1,
        gameOver: false,
    });

    setPlayers = event => this.setState({
        preGame: false,
        players: event.target.id
    });

    handleMoveClick = event => {
        const row    = event.target.attributes.row.value;
        const column = event.target.attributes.column.value;

        this.submitMove(row, column);
    }

    submitMove = (row, column) => {
        const currentPlayer = this.state.moveCount % 2 ? 'x' : 'o';
        const board = this.state.board.slice(0);

        board[row][column] = currentPlayer;

        const gameOver = this.state.moveCount === 9 ? true : referee(board);

        this.setState({
            moveCount: this.state.moveCount + 1,
            board,
            gameOver,
            currentPlayer
        });
    }

    startOver = () => (
        this.setState(this.getInitialState())
    );

    componentDidUpdate = () => {
        const followUpMove = !this.state.gameOver ? computerMove(this.state.players, this.state.board, this.state.moveCount) : false;
        
        if (followUpMove) {
            setTimeout(() => this.submitMove(followUpMove.row, followUpMove.column), 1500);
        }
    }

    render = () => this.state.preGame ?
        <PreGame setPlayers={this.setPlayers} /> :
        this.state.gameOver ?
            <GameOver moveCount={this.state.moveCount} currentPlayer={this.state.currentPlayer} startOver={this.startOver} /> :
            <GameBoard state={this.state.board} makeMove={this.handleMoveClick} />;
}

export default App;
