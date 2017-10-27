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

    let checkForHeat = () => {
      let randNum = Math.floor(Math.random() * 16)

      if (this.props.board[randNum] !== '') {
        checkForHeat()
      }

      if (this.props.board[randNum] === '' && this.props.turnCounter <= 3) {
        // For first three turns, mark random cell if checkForDanger fails
        this.props.board[randNum] = this.props.player2symbol
        this.props.mark1P()
      } else if (this.props.board[randNum] === '') {
        if (this.props.turnCounter < 5) {
          // On fourth turn, find out where the action is
          let matchedArrays = []
          // Get winning arrays that include our random number
          for (let combo in winningArrays) {
            if (winningArrays[combo].includes(randNum)) {
              matchedArrays.push(winningArrays[combo])
            }
          }
          // See how many cells in those arrays are marked and by whom
          let count1 = []
          let count2 = []
          for (let arr in matchedArrays) {
            for (let i in matchedArrays[arr]) {
              if (this.props.board[i] === this.props.player1symbol) {
                count1.push(1)
              }
              if (this.props.board[i] === this.props.player2symbol) {
                count2.push(1)
              }
            }
          }
          // Get integers that denote how many symbols each player
          // has placed into the matched arrays
          let heatCheckerP1 = count1.reduce((sum, val) => {
            return sum + val
          }, 0)
          let heatCheckerP2 = count2.reduce((sum, val) => {
            return sum + val
          }, 0)
          // If one of our matched arrays has been marked,
          // mark cell at index of randNum. If not, get new randNum.
          // This prevents pointless moves.
          if (heatCheckerP1 > 0 || heatCheckerP2 > 0) {
            this.props.board[randNum] = this.props.player2symbol
            this.props.mark1P()
          } else if (heatCheckerP1 > -1 || heatCheckerP2 > -1) {
            this.props.board[randNum] = this.props.player2symbol
            this.props.mark1P()
          } else {
            checkForHeat()
          }
        } else if (this.props.turnCounter >= 5) {
          // From the fifth term on...
          let matchedArrays = []
          for (let combo in winningArrays) {
            if (winningArrays[combo].includes(randNum)) {
              matchedArrays.push(winningArrays[combo])
            }
          }
          let count1 = []
          let count2 = []
          for (let arr in matchedArrays) {
            for (let i in matchedArrays[arr]) {
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
          // Require an array have at least two similar symbols
          if (heatCheckerP1 > 1 || heatCheckerP2 > 1) {
            this.props.board[randNum] = this.props.player2symbol
            this.props.mark1P()
          } else {
            checkForHeat()
          }
        }
      }
    }

    let checkForDanger = () => {
      // Initialize placeholder for final index value
      let blockCell = 0
      // Mark has not yet been marked
      let marked = false
      for (let combo in winningArrays) {
        // Initialize values for each combo
        let P1symbols = 0
        let P2symbols = 0
        let emptyCells = 0
        let emptyIndex = 0
        // And iterate through each combo
        for (let i in winningArrays[combo]) {
          let q = winningArrays[combo][i]
          // Count the number of P1 and P2 symbols in the combo
          if (this.props.board[q] === this.props.player1symbol) {
            P1symbols++
          }
          if (this.props.board[q] === this.props.player2symbol) {
            P2symbols++
          }
          // Count the number of empty spaces in the combo
          if (this.props.board[q] === '') {
            emptyCells++
            emptyIndex = q
          }
          // If three marked by one player with one empty cell,
          // mark the empty cell. Danger found!
          if ((P1symbols === 3 && emptyCells === 1) ||
              (P2symbols === 3 && emptyCells === 1)) {
            blockCell = emptyIndex
            this.props.board[blockCell] = this.props.player2symbol
            this.props.mark1P()
            marked = true
            return
          }
        }
      }
      // If danger not found, check for heat
      if (marked !== true) {
        checkForHeat()
      } else {
        return
      }
    }

    // Endgame logic
    let isItOver = () => {
      if (this.props.board[0] !== '' &&
      this.props.board[0] === this.props.board[1] &&
      this.props.board[0] === this.props.board[2] &&
        this.props.board[0] === this.props.board[3]) {
        // Create 'winner' key in state object
        // with value of this.props.board[0]
        // to trigger different dialogue options in 1P
        // i.e. 'You Lost' or 'You Win'
        this.props.wingame()
      } else if (this.props.board[4] !== '' &&
      this.props.board[4] === this.props.board[5] &&
      this.props.board[4] === this.props.board[6] &&
      this.props.board[4] === this.props.board[7]) {
        this.props.wingame()
      } else if (this.props.board[8] !== '' &&
      this.props.board[8] === this.props.board[9] &&
      this.props.board[8] === this.props.board[10] &&
      this.props.board[8] === this.props.board[11]) {
        this.props.wingame()
      } else if (this.props.board[12] !== '' &&
      this.props.board[12] === this.props.board[13] &&
      this.props.board[12] === this.props.board[14] &&
      this.props.board[12] === this.props.board[15]) {
        this.props.wingame()
      } else if (this.props.board[0] !== '' &&
      this.props.board[0] === this.props.board[4] &&
      this.props.board[0] === this.props.board[8] &&
      this.props.board[0] === this.props.board[12]) {
        this.props.wingame()
      } else if (this.props.board[1] !== '' &&
      this.props.board[1] === this.props.board[5] &&
      this.props.board[1] === this.props.board[9] &&
      this.props.board[1] === this.props.board[13]) {
        this.props.wingame()
      } else if (this.props.board[2] !== '' &&
      this.props.board[2] === this.props.board[6] &&
      this.props.board[2] === this.props.board[10] &&
      this.props.board[2] === this.props.board[14]) {
        this.props.wingame()
      } else if (this.props.board[3] !== '' &&
      this.props.board[3] === this.props.board[7] &&
      this.props.board[3] === this.props.board[11] &&
      this.props.board[3] === this.props.board[15]) {
        this.props.wingame()
      } else if (this.props.board[0] !== '' &&
      this.props.board[0] === this.props.board[5] &&
      this.props.board[0] === this.props.board[10] &&
      this.props.board[0] === this.props.board[15]) {
        this.props.wingame()
      } else if (this.props.board[3] !== '' &&
      this.props.board[3] === this.props.board[6] &&
      this.props.board[3] === this.props.board[9] &&
      this.props.board[3] === this.props.board[12]) {
        this.props.wingame()
      } else if (this.props.board.indexOf('') === -1) {
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
          // Empty block: Do nothing if cell is marked or game is over
        } else {
          // Mark cell and switch active player
          this.props.board[index] = this.props.player1symbol
          this.props.mark1P()
          // Run AI functions and check for end of game
          checkForDanger()
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
        // Empty block: Do nothing if cell is marked or game is over
      } else {
        this.props.board[index] = this.props.active
        this.props.mark()
        // Mark cell and switch active player
      }
      isItOver()
    }
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
