import React, { Component } from 'react'

class Results extends Component {

  GameOver(props) {
    if (this.props.gameOver === 'no') {
      return null
    }
    if (this.props.gameOver === 'yes' &&
      this.props.totalPlayers === '1' &&
      this.props.winner === this.props.player1symbol) {
      return (
        <div className='results'>
          <h1 id='endgame-text'>PERHAPS I UNDERESTIMATED YOU.</h1>
          <button id='reset' onClick={this.props.getRematch}>
            REMATCH
          </button>
          <button id='reset' onClick={this.props.getInitialState}>
            RECONFIGURE
          </button>
        </div>
      )
    }
    if (this.props.gameOver === 'yes' &&
      this.props.totalPlayers === '1' &&
      this.props.winner === this.props.player2symbol) {
      return (
        <div className='results'>
          <h1 id='endgame-text'>YOU ARE NOW A CORPSE.</h1>
          <button id='reset' onClick={this.props.getRematch}>
            REMATCH
          </button>
          <button id='reset' onClick={this.props.getInitialState}>
            RECONFIGURE
          </button>
        </div>
      )
    }
    if (this.props.gameOver === 'yes' &&
      this.props.totalPlayers === '2' &&
      this.props.winner === this.props.player1symbol) {
      return (
        <div className='results'>
          <h1 id='endgame-text'>{this.props.player2symbol} IS DEAD.</h1>
          <button id='reset' onClick={this.props.getRematch}>
            REMATCH
          </button>
          <button id='reset' onClick={this.props.getInitialState}>
            RECONFIGURE
          </button>
        </div>
      )
    }
    if (this.props.gameOver === 'yes' &&
      this.props.totalPlayers === '2' &&
      this.props.winner === this.props.player2symbol) {
      return (
        <div className='results'>
          <h1 id='endgame-text'>{this.props.player1symbol} HAS BEEN SLAIN.</h1>
          <button id='reset' onClick={this.props.getRematch}>
            REMATCH
          </button>
          <button id='reset' onClick={this.props.getInitialState}>
            RECONFIGURE
          </button>
        </div>
      )
    }
    if (this.props.gameOver === 'draw' &&
        this.props.totalPlayers === '1') {
      return (
        <div className='results'>
          <h1 id='endgame-text'>YOU LIVE TO FIGHT ANOTHER DAY.</h1>
          <button id='reset' onClick={this.props.getRematch}>
            REMATCH
          </button>
          <button id='reset' onClick={this.props.getInitialState}>
            RECONFIGURE
          </button>
        </div>
      )
    }
    if (this.props.gameOver === 'draw' &&
        this.props.totalPlayers === '2') {
      return (
        <div className='results'>
          <h1 id='endgame-text'>EACH PLAYER SURVIVES... BARELY.</h1>
          <button id='reset' onClick={this.props.getRematch}>
            REMATCH
          </button>
          <button id='reset' onClick={this.props.getInitialState}>
            RECONFIGURE
          </button>
        </div>)
    }
  }

  render() {
    return (
      <div>
        {this.GameOver()}
      </div>
    )
  }
}

export default Results
