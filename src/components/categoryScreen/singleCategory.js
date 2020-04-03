import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

const singleCategory = ({ siteCategory }) => {
  // return siteCategory.active === true ? (
  return (
    <ProductConsumer>
      {value => {
        const { filterSites } = value;
        // return siteCategory.active === true ? (
        return (
          <Link
            to={`/themes/${siteCategory.name}`}
            onClick={() => {
              filterSites(siteCategory._id);
              // filterSitesAll(siteCategory._id);
            }}
          >
            <InvisibleButton2>
              <ButtonTextActive>{siteCategory.name}</ButtonTextActive>
            </InvisibleButton2>
          </Link>
        );
        // ) : (
        //   <Link>
        //     <InvisibleButton>
        //       <ButtonText>{siteCategory.name}</ButtonText>
        //     </InvisibleButton>
        //   </Link>
        // );
      }}
    </ProductConsumer>
  );
};

export default singleCategory;

// const InvisibleButton = styled.button`
//   margin: 0px;
//   width: 17rem;
//   padding: 0px;
//   background-color: transparent;
//   border: none;
//   &:focus {
//     outline: none;
//   }

//   @media (max-width: 1200px) {
//     width: 12rem;
//   }
// `;

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

// const ButtonText = styled.p`
//   font-family: sans-serif;
//   color: #d6d5d5;
//   font-size: 1.5rem;
//   margin: 1.5rem;

//   @media (max-width: 1200px) {
//     font-size: 1rem;
//     margin: 0rem;
//     padding: 1rem;
//   }
// `;

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
