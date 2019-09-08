import React from 'react';
import Tile from './Tile';

class Board extends React.Component {
  showBoard(obj) {
    const total = obj.map((row, i) => (
      <div className="row" key={i}>
        {row.map((tile, j) => (
          <Tile
            key={j}
            tile={tile}
            updateGame={this.props.updateGame}/>
        ))}
      </div>
    ));
    return total;
  }

  render() {
    return (
      <div className="board">
        {this.showBoard(this.props.board.grid)}
      </div>
    );
  }
}

export default Board;


/* <Tile
          key = {index}
          tile={tile}
          updateGame={this.props.updateGame}
        /> */