import React from "react";
// import SingleMySite from "./singleMySite";
import { ProductConsumer } from "../../context/context";
import SingleMySiteNew from "./singleMySiteNew";
import SearchBox from "../common/searchBox";

const notPaidMySiteList = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          handleNotPaidMySiteChange,
          sortedCart,
          // mySiteData,
          // cart,
          // sortedMySites,
          // handleMySiteChange,
          search
          // paidMySites
        } = value;

        return (
          <div>
            <section className="featured-sites ">
              <div className="mb-5" style={{ marginLeft: "-150px" }}>
                <SearchBox
                  handleChange={handleNotPaidMySiteChange}
                  search={search}
                  placeholder="Search by domain"
                />
              </div>
              {sortedCart.length === 0 ? (
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
                  {sortedCart.map(item => {
                    return <SingleMySiteNew key={item._id} site={item} />;
                  })}
                </div>
              )}
            </section>
          </div>

          // </div>
        );
      }}
    </ProductConsumer>
  );
};

export default notPaidMySiteList;
