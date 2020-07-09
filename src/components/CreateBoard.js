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
          min-height: 70px;
          padding: 6px 8px;
        `}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Board Title"
          css={css`
            background: rgba(255, 255, 255, 0.25);
            border-radius: 3px;
            height: 20px;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            color: rgba(255, 255, 255, 0.75);
            outline: none;
            border: none;

            &::placeholder {
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              line-height: 20px;
              color: rgba(255, 255, 255, 0.75);
            }
          `}
        />
      </div>
      <button
        css={css`
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;

          padding: 6px 12px;
          margin-top: 5px;

          color: #ffffff;
          background-color: #02102a;
          border-radius: 3px;
          border: none;
          align-self: flex-start;
        `}
        type="submit"
      >
        Create Board
      </button>
    </Form>
  );
};

export default CreateBoards;
