import React, { Component } from 'react';

import './App.css';
import Header from './components/header'
import Board from './components/board'
import Config from './components/config'
import Results from './components/results'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalPlayers: '0',
      symbolsSet: 'no',
      player1symbol: '',
      player2symbol: '',
      active: '',
      gameOver: 'no',
      board: [
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      ],
      turnCounter: 1,
    }
    this.set1Player = this.set1Player.bind(this)
    this.set2Player = this.set2Player.bind(this)
    this.setConfig = this.setConfig.bind(this)
    this.start = this.start.bind(this)
    this.mark = this.mark.bind(this)
    this.mark1P = this.mark1P.bind(this)
    this.wingame = this.wingame.bind(this)
    this.tiegame = this.tiegame.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.getRematch = this.getRematch.bind(this)
  }

  set1Player() {
    this.setState({
      totalPlayers: '1',
    })
  }
  
  set2Player() {
    this.setState({
      totalPlayers: '2',
    })
  }

  setConfig(play1sym, play2sym) {
    this.setState({
      player1symbol: play1sym,
      player2symbol: play2sym,
      active: play1sym,
    })
  }

  start() {
    this.setState({
      symbolsSet: 'yes',
    })
  }

  mark() {
    this.setState({
      board: this.state.board,
      active: this.state.active === this.state.player1symbol ?
      this.state.player2symbol : this.state.player1symbol,
    })
  }

  mark1P() {
    this.setState({
      board: this.state.board,
      turnCounter: this.state.turnCounter++ ,
    })
  }

  wingame() {
    this.setState({
      gameOver: 'yes',
    })
  }

  tiegame() {
    this.setState({
      gameOver: 'draw',
    })
  }

  getInitialState() {
    this.setState({
      totalPlayers: '0',
      symbolsSet: 'no',
      player1symbol: '',
      player2symbol: '',
      active: '',
      gameOver: 'no',
      board: [
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      ],
      turnCounter: 1,
    })
  }

  getRematch() {
    this.setState({
      symbolsSet: 'yes',
      active: this.state.player1symbol,
      gameOver: 'no',
      board: [
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      ],
      turnCounter: 1,
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />

        <Board
          totalPlayers={this.state.totalPlayers}
          board={this.state.board}
          player1symbol={this.state.player1symbol}
          player2symbol={this.state.player2symbol}
          active={this.state.active}
          gameOver={this.state.gameOver}
          turnCounter={this.state.turnCounter}
          mark={this.mark}
          mark1P={this.mark1P}
          wingame={this.wingame}
          tiegame={this.tiegame}
        />

        <Config
          set1Player={this.set1Player}
          set2Player={this.set2Player}
          setConfig = {this.setConfig}
          start={this.start}
          totalPlayers={this.state.totalPlayers}
          symbolsSet= {this.state.symbolsSet}
        />

        <Results
          totalPlayers={this.state.totalPlayers}
          gameOver={this.state.gameOver}
          getInitialState={this.getInitialState}
          getRematch={this.getRematch}
        />

      </div>
    );
  }
}

export default App;

