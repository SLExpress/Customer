import React from "react";
import SingleMySiteNew from "./singleMySiteNew";
import SearchBox from "./../common/searchBox";
import { ProductConsumer } from "../../context";

const mySiteList = () => {
  return (
    <ProductConsumer>
      {value => {
        const { sortedMySites, handleMySiteChange, search } = value;

        return (
          <div>
            <section className="featured-sites ">
              <div className="mb-5" style={{ marginLeft: "-150px" }}>
                <SearchBox
                  handleChange={handleMySiteChange}
                  search={search}
                  placeholder="Search by domain"
                />
              </div>
              {sortedMySites.length === 0 ? (
                <div
                  className="col text-color-ash text-center "
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    marginBottom: "500px"
                  }}
                >
                  sorry, no items matched your search
                </div>
              ) : (
                <div className="featured-sites-center">
                  {sortedMySites.map(item => {
                    return <SingleMySiteNew key={item._id} site={item} />;
                  })}
                </div>
              )}
            </section>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default mySiteList;
