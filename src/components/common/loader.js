/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";

const loader = () => {
  return (
    <LoadingWrapper>
      <Loader active />
    </LoadingWrapper>
  );
};

export default loader;
const LoadingWrapper = styled.div`
  background-color: #ffffff;
  min-height: calc(100vh - 190px);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
