/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import styled from "styled-components";

export const Buttons = ({ name, color, onSubmit }) => {
  return (
    <ButtonStyle inverted color={color} onClick={onSubmit}>
      {name}
    </ButtonStyle>
  );
};

export const CButtons = ({ name, color, onSubmit }) => {
  return (
    <center>
      <ButtonWrapper inverted color={color} onClick={onSubmit}>
        {name}
      </ButtonWrapper>
    </center>
  );
};

const ButtonWrapper = styled.button`
  border-width: 2px;
  width: 6rem;
  background-color: transparent;
  border-style: solid;
  border-radius: 2rem;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: ${(props) => props.color};
  }
`;
const ButtonStyle = styled.button`
  border-width: 2px;
  width: 7rem;
  background-color: transparent;
  border-style: solid;
  border-radius: 2rem;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: ${(props) => props.color};
  }
`;
