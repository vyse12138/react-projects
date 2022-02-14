import React from "react";
import "../../style/Square.css";
const Square = ({ onClick, currentSquare }) => {
  return (
    <button
      onClick={() => onClick()}
      className=" square btn btn-light border border-dark font-weight-bold"
    >
      {currentSquare}
    </button>
  );
};

export default Square;
