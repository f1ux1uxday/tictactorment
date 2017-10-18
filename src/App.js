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
      // Add state key for totalPlayers: (1 or 2)
      player1symbol: '',
      player2symbol: '',
      active: '',
      gameOver: 'no',
      board: [
        '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      ],
    }
    this.setTotalPlayers = this.setTotalPlayers.bind(this)
    this.setConfig = this.setConfig.bind(this)
    this.start = this.start.bind(this)
    this.mark = this.mark.bind(this)
    this.wingame = this.wingame.bind(this)
    this.tiegame = this.tiegame.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
  }

  setTotalPlayers(num) {
    this.setState({
      totalPlayers: num,
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
          mark={this.mark}
          wingame={this.wingame}
          tiegame={this.tiegame}
        />

        <Config
          setTotalPlayers={this.setTotalPlayers}
          setConfig = {this.setConfig}
          start={this.start}
          totalPlayers={this.state.totalPlayers}
          symbolsSet= {this.state.symbolsSet}
        />

        <Results
          gameOver={this.state.gameOver}
          getInitialState={this.getInitialState}
        />



      </div>
    );
  }
}

export default App;

// <Results
//  gameOver = {this.state.gameOver}
// />
