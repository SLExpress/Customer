/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import SearchBox from "./../common/searchBox";
import { ProductConsumer } from "../../context";
import styled from "styled-components";

const allSitesFilter = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { search, min, max, price, handleSiteChange } = value;
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                <div>
                  <SearchBox handleChange={handleSiteChange} search={search} />
                </div>

                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price :<span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="filter-price"
                    min={min}
                    max={max}
                    value={price}
                    onChange={handleSiteChange}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default allSitesFilter;

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
