import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  function hasWon() {
    // Check if all cells are turned off (false)
    return board.every(row => row.every(cell => !cell));
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const newBoard = oldBoard.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isClickedCell = rowIndex === y && colIndex === x;
          const shouldFlip = isClickedCell || 
            rowIndex === y - 1 || rowIndex === y + 1 || 
            colIndex === x - 1 || colIndex === x + 1;

          if (shouldFlip) {
            const boardCopy = JSON.parse(JSON.stringify(oldBoard));
            flipCell(rowIndex, colIndex, boardCopy);
            return boardCopy[rowIndex][colIndex];
          }

          return cell;
        })
      );

      return newBoard;
    });
  }

  const tableBoard = [];
  for (let i = 0; i < nrows; i++) {
    let row = [];
    for (let j = 0; j < ncols; j++) {
      const coord = `${i}-${j}`;
      row.push(<Cell key={coord} isLit={board[i][j]} flipCellsAroundMe={() => flipCellsAround(coord)} />);
    }
    tableBoard.push(<tr key={i}>{row}</tr>);
  }

  return (
    <div>
      {hasWon() ? <div>You Won!</div> : <table className="Board">{tableBoard}</table>}
    </div>
  );
}

export default Board;