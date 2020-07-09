import React, { Fragment, useState, useEffect } from "react";
import { BoardsContainer } from "./StyledComponents";
import CreateBoard from "./CreateBoard";
import { deleteBoard, showBoards } from "../services/boards";

import Board from "./Board";

const Boards = ({ setCurrentPage, user }) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const boards_request = async () => {
      const { data } = await showBoards(user);
      if (data) {
        setBoards(data);
      } else {
        setCurrentPage("login");
      }
    };

    boards_request();
  }, [setCurrentPage, user]);

  const delete_board = async (board) => {
    const { data, error } = await deleteBoard(user, board.id);
    if (data) {
      const newBoards = [...boards];
      const board_index = newBoards.findIndex((el) => el.id === board.id);
      newBoards.splice(board_index, 1);
      setBoards(newBoards);
    } else {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <BoardsContainer>
        <CreateBoard />
      </BoardsContainer>

      <BoardsContainer>
        {boards.map((board) => {
          return (
            <Board key={board.id} delete_board={delete_board} board={board} />
          );
        })}
      </BoardsContainer>
    </Fragment>
  );
};

export default Boards;
