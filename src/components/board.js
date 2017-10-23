import React, { Component } from 'react'

class Board extends Component {

  handleClick(index) {

    let winningArrays = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10 ,15],
      [3, 6, 9, 12],
    ]

    let CPU_MOVE = () => {
      let randNum = Math.floor(Math.random() * 16)
      console.log(randNum)

      if (this.props.board[randNum] !== '') {
        CPU_MOVE()
      }

      if (this.props.board[randNum] === '' && this.props.turnCounter <= 3) {
        this.props.board[randNum] = this.props.player2symbol
        this.props.mark1P()
        console.log('turn count ' + this.props.turnCounter)
      } else if (this.props.board[randNum] === '') {
        if (this.props.turnCounter <= 4) {
          let matchedArrays = []
          // Get matching arrays
          for (let arr in winningArrays) {
            if (winningArrays[arr].includes(randNum)) {
              matchedArrays.push(winningArrays[arr])
            }
          }
          console.log(matchedArrays)
          // See how many cells in those arrays are marked and by whom
          let count1 = []
          let count2 = []
          for (let arr in matchedArrays) {
            for (let i in arr) {
              if (this.props.board[i] === this.props.player1symbol) {
                count1.push(1)
              }
              if (this.props.board[i] === this.props.player2symbol) {
                count2.push(1)
              }
            }
          }
          let heatCheckerP1 = count1.reduce((sum, val) => {
            return sum + val
          }, 0)
          let heatCheckerP2 = count2.reduce((sum, val) => {
            return sum + val
          }, 0)
          console.log('hc: ' + heatCheckerP2 + ' / ' + heatCheckerP1)
          if (heatCheckerP1 > 0 || heatCheckerP2 > 0) {
            this.props.board[randNum] = this.props.player2symbol
            this.props.mark1P()
            console.log('turn count ' + this.props.turnCounter)
          } else {
          CPU_MOVE()
          }
        } else if (this.props.turnCounter <= 6) {
          let matchedArrays = []
          for (let arr in winningArrays) {
            if (winningArrays[arr].includes(randNum)) {
              matchedArrays.push(winningArrays[arr])
            }
          }
          console.log(matchedArrays)
          // See how many cells in those arrays are marked and by whom
          let count1 = []
          let count2 = []
          for (let arr in matchedArrays) {
            for (let i in arr) {
              if (this.props.board[i] === this.props.player1symbol) {
                count1.push(1)
              }
              if (this.props.board[i] === this.props.player2symbol) {
                count2.push(1)
              }
            }
          }
          let heatCheckerP10 = count1.reduce((sum, val) => {
            return sum + val
          }, 0)
          let heatCheckerP20 = count2.reduce((sum, val) => {
            return sum + val
          }, 0)
          console.log('hc : ' + heatCheckerP20 + ' / ' + heatCheckerP10)
          if (heatCheckerP10 > 1 || heatCheckerP20 > 1) {
            this.props.board[randNum] = this.props.player2symbol
            this.props.mark1P()
            console.log('turn count ' + this.props.turnCounter)
          } else {
            CPU_MOVE()
          }
        } else if (this.props.turnCounter > 6) {
          let matchedArrays = []
          for (let arr in winningArrays) {
            if (winningArrays[arr].includes(randNum)) {
              matchedArrays.push(winningArrays[arr])
            }
          }
          console.log(matchedArrays)
          // See how many cells in those arrays are marked and by whom
          let count1 = []
          let count2 = []
          for (let arr in matchedArrays) {
            for (let i in arr) {
              if (this.props.board[i] === this.props.player1symbol) {
                count1.push(1)
              }
              if (this.props.board[i] === this.props.player2symbol) {
                count2.push(1)
              }
            }
          }
          let heatCheckerP100= count1.reduce((sum, val) => {
            return sum + val
          }, 0)
          let heatCheckerP200 = count2.reduce((sum, val) => {
            return sum + val
          }, 0)
          console.log('hc : ' + heatCheckerP200 + ' / ' + heatCheckerP100)
          if (heatCheckerP100 >= 2 || heatCheckerP200 >= 2) {
            this.props.board[randNum] = this.props.player2symbol
            this.props.mark1P()
            console.log('turn count ' + this.props.turnCounter)
          } else {
            CPU_MOVE()
          }
        }
      } 
    }

    let isItOver = () => {
      if (this.props.board[0] !== '' &&
      this.props.board[0] === this.props.board[1] &&
      this.props.board[0] === this.props.board[2] &&
      this.props.board[0] === this.props.board[3]) {
        console.log('1')
        console.log(this.props.active)
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
    }

    // Click logic for One-Player game
    if (this.props.totalPlayers === '1') {
      if (this.props.active === this.props.player1symbol) {
        if (this.props.board[index] === this.props.player1symbol ||
          this.props.board[index] === this.props.player2symbol ||
          this.props.gameOver === 'yes' ||
          this.props.gameOver === 'draw') {
          // Do nothing if cell is marked or game is over
        } else {
          this.props.board[index] = this.props.player1symbol
          this.props.mark1P()
          console.log('turn count: ' + this.props.turnCounter)
          // Mark cell and switch active player
          CPU_MOVE()
          isItOver()
        }
      }
    }

    // Click logic for Two-Player game
    if (this.props.totalPlayers === '2') {
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
      isItOver()
      // Victory logic...
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
