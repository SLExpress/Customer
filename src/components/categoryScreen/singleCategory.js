import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

const singleCategory = ({ siteCategory }) => {
  return (
    <ProductConsumer>
      {value => {
        const { filterSites } = value;
        return (
          <Link
            to={`/themes/${siteCategory.name}`}
            onClick={() => {
              filterSites(siteCategory._id);
            }}
          >
            <InvisibleButton2>
              <ButtonTextActive>{siteCategory.name}</ButtonTextActive>
            </InvisibleButton2>
          </Link>
        );
      }}
    </ProductConsumer>
  );
};

export default singleCategory;

const InvisibleButton2 = styled.button`
  margin: 0px;
  width: 17rem;
  padding: 1rem;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }

  &:hover {
    p {
      color: #628bff;
    }
  }

  @media (max-width: 1200px) {
    width: 12rem;
  }
`;

const ButtonTextActive = styled.p`
  font-family: sans-serif;
  color: #5f5f5f;
  font-size: 1.5rem;
  margin: 1.5rem;

  &:hover {
    color: #628bff;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
    margin: 0rem;
    padding: 1rem;
  }
`;
