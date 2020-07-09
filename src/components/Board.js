import React from "react";
import { BoardContainer } from "./StyledComponents";

import { ReactComponent as CloseSVG } from "../images/close.svg";

const Board = ({ delete_board, board }) => {
  return (
    <BoardContainer>
      <p>{board.name}</p>
      <CloseSVG onClick={() => delete_board(board)} />
    </BoardContainer>
  );
};

export default Board;
