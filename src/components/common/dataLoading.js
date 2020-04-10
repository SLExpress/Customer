/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import styled from "styled-components";
import { css } from "@emotion/core";
import { SyncLoader } from "react-spinners";

const LoadingScreen = ({ text }) => {
  return (
    <LoadingWrapper>
      <SyncLoader
        css={override}
        sizeUnit="px"
        size={20}
        color="#123abc"
        loading
      />
      <CreatingText>{text}</CreatingText>
    </LoadingWrapper>
  );
};

export default LoadingScreen;

const LoadingWrapper = styled.div`
  background-color: #ffffff;
  min-height: calc(100vh - 190px);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const CreatingText = styled.p`
  font-size: 2rem;
  color: #00000054;
  margin-top: 2rem;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
`;
