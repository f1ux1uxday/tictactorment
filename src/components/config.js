import React, { Component } from 'react'

class Config extends Component {
  constructor(props) {
    super(props)

    this.configClick = this.configClick.bind(this)
    this.setPlayerAmount = this.setPlayerAmount.bind(this)
  }

  configClick(event) {
    var p1 = document.getElementById('player1input')
    var p2 = document.getElementById('player2input')
    var play1sym = p1.value
    var play2sym = p2.value

    if (play1sym === play2sym) {
      alert('CHOOSE A UNIQUE SYMBOL')
    } else {
      // Sets player symbols
      this.props.setConfig(play1sym, play2sym)
      console.log(this.props.totalPlayers)
      // Sets state.symbolsSet to 'yes', ends config
      // *ADD CONFIG OPTION FOR ONE/TWO PLAYER GAMES*
      this.props.start()
    }
  }

  setPlayerAmount(num) {
    var pTotal = document.getElementById('playerAmount')
    var numOfPlayers = pTotal.value

    if (numOfPlayers === '1' || numOfPlayers === '2') {
      this.props.setTotalPlayers(num)
    } else {
      alert('ENTER 1 OR 2')
    }
  }

  configOrNot() {
    if (this.props.totalPlayers === '0') {
      return (
        <div className='row'>
          <div className='config'>
            <div className='player-set'>
              <label htmlFor='playerAmount' id='total-players'>
                How many players?
              </label>
              <input
                id='playerAmount'
                className='form-control'
                type='text'
                min='1'
                size='1'
                defaultValue='1/2'
              />
              <button id='amount-btn' onClick={this.setPlayerAmount}>
                CONFIRM PLAYERS 
              </button>
            </div>
          </div>
        </div>
      )
    }
    if (this.props.symbolsSet === 'no' && this.props.totalPlayers !== 0) {
      return (
        <div className='row'>
          <div className='config'>
            <div className='form-group'>
              <div className='ok'>
                <label htmlFor='player1input' id='p1-label'>
                  CONTESTANT 1:
                </label>
                <input
                  id='player1input'
                  className='form-control'
                  type='text'
                  min='1'
                  size='1'
                  defaultValue= 'X'
                />
              </div>

              <div className='ok'>
                <label htmlFor='player2input' id='p2-label'>
                  CONTESTANT 2:
                </label>
                <input
                  id='player2input'
                  className='form-control'
                  type='text'
                  min='1'
                  size='1'
                  defaultValue= 'O'
                />
              </div>

              <button id='ready' onClick={this.configClick}>
                CONFIRM INSIGNIA
              </button>
            </div>
          </div>
        </div>
      )
    } if (this.props.symbolsSet === 'yes') {
      return null
    }
  }

  render() {
    return (
      <div>
        {this.configOrNot()}
      </div>
    )
  }
}

export default Config
