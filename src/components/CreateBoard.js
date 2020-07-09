/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { Form } from "./StyledComponents";

const CreateBoards = () => {
  return (
    <Form>
      <div
        css={css`
          background-color: #0079bf;
          border-radius: 3px;
          width: 100%;
          height: 100%;
        `}
      >
        <input type="text" placeholder="Board Title" />
      </div>
      <button type="submit">Create Board</button>
    </Form>
  );
};

export default CreateBoards;
