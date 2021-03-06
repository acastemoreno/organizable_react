// const apiUrl = "http://api-organizable.herokuapp.com";
import { apiUrl, objectToSnake } from "../utils";

const showUser = async (user_id) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { response, data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/users`, {
      method: "POST",
      body: JSON.stringify({ user: objectToSnake(userData) }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();

    if (response.ok) {
      return { response, data };
    } else {
      return { error: data.errors.message };
    }
  } catch (error) {
    return { error: "Network error" };
  }
};

const updateUser = async (user, newData) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({ user: objectToSnake(newData) }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token="${user.token}"`,
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

const deleteUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/users/${user.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token="${user.token}"`,
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

export { showUser, createUser, updateUser, deleteUser };
