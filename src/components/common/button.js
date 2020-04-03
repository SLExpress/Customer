import React from "react";
import styled from "styled-components";

const button = ({ buttonName, buttonType, color }) => {
  if (buttonType === "blue") {
    return (
      <BlueButton>
        <BlueText>{buttonName}</BlueText>
      </BlueButton>
    );
  } else if (buttonType === "ash") {
    return (
      <AshButton>
        <AshText>{buttonName}</AshText>
      </AshButton>
    );
  } else {
    return (
      <RedButton>
        <RedText>{buttonName}</RedText>
      </RedButton>
    );
  }

  // return buttonType === "blue" ? (
  //   <BlueButton>
  //     <BlueText>{buttonName}</BlueText>
  //   </BlueButton>
  // ) :  (
  //   <AshButton>
  //     <AshText>{buttonName}</AshText>
  //   </AshButton>
  // );
};

export default button;

const BlueButton = styled.button`
  border-width: 2px;
  width: 8rem;
  background-color: transparent;
  border-style: solid;
  border-radius: 2rem;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #40a3dc;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: #40a3dc;
  }
`;

const BlueText = styled.p`
  color: #40a3dc;
  margin: 0.6rem;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  &:hover {
    color: #fff;
  }
`;

const AshButton = styled.button`
  border-width: 2px;
  width: 8rem;
  background-color: transparent;
  border-style: solid;
  border-radius: 2rem;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #5f5e5e;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: #5f5e5e;
  }
`;

const AshText = styled.p`
  color: #5f5e5e;
  margin: 0.6rem;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  &:hover {
    color: #fff;
  }
`;

const RedButton = styled.button`
  border-width: 2px;
  width: 8rem;
  background-color: transparent;
  border-style: solid;
  border-radius: 2rem;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: #e60000;
  margin-top: 2rem;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #fff;
    background-color: #e60000;
  }
`;

const RedText = styled.p`
  color: #e60000;
  margin: 0.6rem;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  &:hover {
    color: #fff;
  }
`;
