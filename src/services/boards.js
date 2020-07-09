import { apiUrl, objectToSnake } from "../utils";

const showBoards = async (current_user) => {
  try {
    const response = await fetch(`${apiUrl}/boards`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Token token="${current_user.token}"`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

const createBoard = async (current_user, boardData) => {
  try {
    const response = await fetch(`${apiUrl}/boards`, {
      method: "POST",
      body: JSON.stringify({ board: objectToSnake(boardData) }),
      headers: {
        "content-type": "application/json",
        Authorization: `Token token="${current_user.token}"`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

const deleteBoard = async (current_user, board_id) => {
  try {
    const response = await fetch(`${apiUrl}/boards/${board_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Token token="${current_user.token}"`,
      },
    });
    if (response.ok) {
      return { data: true };
    } else {
      const data = await response.json();
      return { error: data.errors.message };
    }
  } catch (error) {
    console.log(error);
    return { error: "Network error" };
  }
};

export { showBoards, createBoard, deleteBoard };
