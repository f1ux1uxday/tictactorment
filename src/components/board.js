import React, { Component } from 'react'

class Board extends Component {

  handleClick(index) {

    // Click logic for One-Player game
    // < if (state.totalPlayers === 1) >

    // Click logic for Two-Player game
    // < if (state.totalPlayers === 2) >
    if (this.props.board[index] === this.props.player1symbol ||
      this.props.board[index] === this.props.player2symbol ||
      this.props.gameOver === 'yes' ||
      this.props.gameOver === 'draw') {
      // Do nothing if cell is marked or game is over
    } else {
      this.props.board[index] = this.props.active
      this.props.mark()
      // Mark cell and switch active player
    }

    // Victory logic...
    if (this.props.board[0] !== '' &&
    this.props.board[0] === this.props.board[1] &&
    this.props.board[0] === this.props.board[2] &&
    this.props.board[0] === this.props.board[3]) {
      console.log('1')
      this.props.wingame()
    } else if (this.props.board[4] !== '' &&
    this.props.board[4] === this.props.board[5] &&
    this.props.board[4] === this.props.board[6] &&
    this.props.board[4] === this.props.board[7]) {
      console.log('2')
      this.props.wingame()
    } else if (this.props.board[8] !== '' &&
    this.props.board[8] === this.props.board[9] &&
    this.props.board[8] === this.props.board[10] &&
    this.props.board[8] === this.props.board[11]) {
      console.log('3')
      this.props.wingame()
    } else if (this.props.board[12] !== '' &&
    this.props.board[12] === this.props.board[13] &&
    this.props.board[12] === this.props.board[14] &&
    this.props.board[12] === this.props.board[15]) {
      console.log('4')
      this.props.wingame()
    } else if (this.props.board[0] !== '' &&
    this.props.board[0] === this.props.board[4] &&
    this.props.board[0] === this.props.board[8] &&
    this.props.board[0] === this.props.board[12]) {
      console.log('5')
      this.props.wingame()
    } else if (this.props.board[1] !== '' &&
    this.props.board[1] === this.props.board[5] &&
    this.props.board[1] === this.props.board[9] &&
    this.props.board[1] === this.props.board[13]) {
      console.log('6')
      this.props.wingame()
    } else if (this.props.board[2] !== '' &&
    this.props.board[2] === this.props.board[6] &&
    this.props.board[2] === this.props.board[10] &&
    this.props.board[2] === this.props.board[14]) {
      console.log('7')
      this.props.wingame()
    } else if (this.props.board[3] !== '' &&
    this.props.board[3] === this.props.board[7] &&
    this.props.board[3] === this.props.board[11] &&
    this.props.board[3] === this.props.board[15]) {
      console.log('8')
      this.props.wingame()
    } else if (this.props.board[0] !== '' &&
    this.props.board[0] === this.props.board[5] &&
    this.props.board[0] === this.props.board[10] &&
    this.props.board[0] === this.props.board[15]) {
      console.log('9')
      this.props.wingame()
    } else if (this.props.board[3] !== '' &&
    this.props.board[3] === this.props.board[6] &&
    this.props.board[3] === this.props.board[9] &&
    this.props.board[3] === this.props.board[12]) {
      console.log('10')
      this.props.wingame()
    } else if (this.props.board.indexOf('') === -1) {
      console.log('draw')
      this.props.tiegame()
    }

    console.log(index)
  }

  render() {
    return (
      <div className='board'>
        {this.props.board.map((cell, index) => {
          return <div className='square'
          onClick={() => this.handleClick(index)}>{cell}</div>
        })}
      </div>
    )
  }
}

export default Board
