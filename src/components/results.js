import React, { Component } from 'react'

class Results extends Component {

  GameOver(props) {
    if (this.props.gameOver === 'no') {
      return null
    }
    if (this.props.gameOver === 'yes' &&
      this.props.totalPlayers === '1') {
      return (
        <div className='results'>
          <h1>YOU HAVE BEEN DEFEATED.</h1>
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
        this.props.totalPlayers === '2') {
      return (
        <div className='results'>
          <h1>FATAL VICTORY. LOSER DIES.</h1>
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
          <h1>YOU LIVE TO FIGHT ANOTHER DAY.</h1>
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
          <h1>EACH PLAYER SURVIVES... BARELY.</h1>
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
