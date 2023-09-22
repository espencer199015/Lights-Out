import React from "react";
import Board from "./Board";
import "./App.css";

function App() {
  const nrows = 5; // Set the number of rows for the board
  const ncols = 5; // Set the number of columns for the board
  const chanceLightStartsOn = 0.25; // Set the chance for a cell to be initially lit

  return (
    <div className="App">
      <Board nrows={nrows} ncols={ncols} chanceLightStartsOn={chanceLightStartsOn} />
    </div>
  );
}

export default App;