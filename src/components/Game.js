import React from 'react'
import * as Minesweeper from '../minesweeper'
import Board from './Board.jsx'

class Game extends React.Component {
  constructor(props){
    super(props)

    this.state.board= new Minesweeper.Board(5,1)
    this.updateGame = this.updateGame.bind(this)
  }
  state = {
    board: null
  }

  checkWinLoss(){
    const board = this.state.board;
    if(board.won() || board.lost() === true){
      if(board.won() === true){alert('You win!')}
      else if(board.lost()){alert('You lose')}
    }
  }

  updateGame(tile, flagging){
    if(flagging){
      tile.toggleFlag()
    } else {if(!flagging){
      tile.explore()
  }}
  this.setState({board: this.state.board});
  this.checkWinLoss();
    }

  render(){
    return(
    <div>
      <Board
        board={this.state.board}
        updateGame = {this.updateGame}
      />
            <footer><script src='minesweeper.js'></script></footer>

    </div>
    )}
}

export default Game;