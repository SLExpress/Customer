import React from "react";
import SingleCategory from "./singleCategory";
import SearchBox from "../../components/common/searchBox";
import { ProductConsumer } from "../../context";
import styled from "styled-components";

const CategoryScreen = () => {
  return (
    <ProductConsumer>
      {value => {
        const { handleChange, search, sortedCategories } = value;

        return (
          <MainWrapper>
            <MainHeaderWrapper>
              <SearchBox
                handleChange={handleChange}
                search={search}
                placeholder="Search"
              />
              {sortedCategories.length === 0 ? (
                <div
                  className="col  text-color-ash text-center"
                  style={{ fontSize: "20px", marginTop: "20px" }}
                >
                  sorry, no items matched your search
                </div>
              ) : (
                <MainContent>
                  <FieldContent>
                    {sortedCategories.map((item, index) => {
                      return index % 3 === 0 ? (
                        <SingleCategory key={item._id} siteCategory={item} />
                      ) : null;
                    })}
                  </FieldContent>

                  <FieldContent>
                    {sortedCategories.map((item, index) => {
                      return index % 3 === 1 ? (
                        <SingleCategory key={item._id} siteCategory={item} />
                      ) : null;
                    })}
                  </FieldContent>

                  <FieldContent>
                    {sortedCategories.map((item, index) => {
                      return index % 3 === 2 ? (
                        <SingleCategory key={item._id} siteCategory={item} />
                      ) : null;
                    })}
                  </FieldContent>
                </MainContent>
              )}
            </MainHeaderWrapper>
          </MainWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default CategoryScreen;

const MainWrapper = styled.div`
  background-color: white;
  min-height: calc(100vh - 190px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainHeaderWrapper = styled.div`
  margin-top:40px
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  padding: 4rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 2rem;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const FieldContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
