/** @jsx jsx */

// import React from "react";
import { Global, css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0px;
          overflow: auto;
        }
        html,
        body,
        #root {
          margin-top: 0px;
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

const MainContainer = styled.div`
  width: 900px;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
`;

const FormContainer = styled.div`
  background: #f4f5f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 16px;
  min-width: 450px;
  box-sizing: border-box;
  width: 450px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 110px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #0079bf;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 16px;
  line-height: 24px;
  color: #172b4d;
  padding: 4px 14px;
  margin-bottom: 6px;
  width: 100%;
`;

const Button = styled.button`
  background: #ebecf0;
  border-radius: 3px;
  min-width: 72px;
  min-height: 32px;
  padding: 6px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #172b4d;
  border: none;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background: #5aac44;
  color: #ffffff;
`;

const WarningButton = styled(Button)`
  background: #cf513d;
  color: #ffffff;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 20px;
  color: #0079bf;
  cursor: pointer;
`;

const BoardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  margin-top: 40px;
  margin-bottom: 24px;

  &:last-child {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 96px;
  background-color: #4bbf6b;
  border-radius: 3px;
  padding: 8px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  position: relative;

  p {
    margin-right: 10px;
  }

  svg {
    position: absolute;
    top: 6px;
    right: 8px;
    cursor: pointer;
  }
`;

export {
  GlobalStyle,
  MainContainer,
  FormContainer,
  Form,
  Label,
  Input,
  Button,
  PrimaryButton,
  WarningButton,
  Link,
  BoardsContainer,
  BoardContainer,
};
