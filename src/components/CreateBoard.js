/** @jsx jsx */
import { useState } from "react";
import { css, jsx } from "@emotion/core";
import { Form } from "./StyledComponents";

const CreateBoards = ({ create_board }) => {
  const [formData, setFormData] = useState({
    name: "",
    closed: false,
    color: "red",
    starred: false,
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    create_board(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div
        css={css`
          background-color: #0079bf;
          border-radius: 3px;
          width: 100%;
          height: 100%;
        `}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Board Title"
        />
      </div>
      <button type="submit">Create Board</button>
    </Form>
  );
};

export default CreateBoards;
