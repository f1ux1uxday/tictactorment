import React, { Component } from 'react'

class Results extends Component {

  GameOver(props) {
    if (this.props.gameOver === 'no') {
      return null
    }
    if (this.props.gameOver === 'yes') {
      return (
        <div className='results'>
          <h1> FATAL VICTORY. LOSER DIES.</h1>
          <button id='reset' onClick={this.props.getInitialState}>
            NEW GAME
          </button>
        </div>
      )
    }
    if (this.props.gameOver === 'draw') {
      return (<div className='results'>
        <h1> EACH PLAYER SURVIVES... BARELY</h1>
        <button id='reset' onClick={this.props.getInitialState}>
          NEW GAME
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
