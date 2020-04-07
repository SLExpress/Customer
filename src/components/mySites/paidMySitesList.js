import React from "react";
import SingleMySiteNew from "./singleMySiteNew";
import SearchBox from "./../common/searchBox";
import { ProductConsumer } from "../../context";

const paidMySiteList = () => {
  return (
    <ProductConsumer>
      {value => {
        const { handlePaidMySiteChange, sortedPaidMySites, search } = value;

        return (
          <div>
            <section className="featured-sites ">
              <div className="mb-5" style={{ marginLeft: "-150px" }}>
                <SearchBox
                  handleChange={handlePaidMySiteChange}
                  search={search}
                  placeholder="Search by domain"
                />
              </div>
              {sortedPaidMySites.length === 0 ? (
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
                  {sortedPaidMySites.map(item => {
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

export default paidMySiteList;
