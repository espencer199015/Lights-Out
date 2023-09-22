import React from "react";
import "./Cell.css";

function Cell({ flipCellsAroundMe, isLit }) {
  const classes = `Cell ${isLit ? "Cell-lit" : ""}`;
  
  return (
    <td className={classes} onClick={flipCellsAroundMe}>
      &nbsp;
    </td>
  );
}

export default Cell;