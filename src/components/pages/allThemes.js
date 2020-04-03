import React, { Component } from "react";
import AllSiteList from "./../sites/allSiteList";
// import SearchBox from "./../common/searchBox";
import { ProductContext } from ".././../context";
import Loader from "./../common/loader";
// import AllSitesFilter from "./../sites/allSitesFilter";

export default class allThemes extends Component {
  static contextType = ProductContext;

  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    // const { handleSiteChange, search, sortedSites } = this.context;
    return (
      <div>
        {/* <AllSitesFilter /> */}
        {/* <center>
          <SearchBox handleChange={handleSiteChange} search={search} />
        </center> */}

        {/* {sortedSites.length === 0 ? (
          <div
            className="col  text-color-ash text-center "
            style={{
              fontSize: "20px",
              marginTop: "20px",
              marginBottom: "500px"
            }}
          >
            sorry, no items matched your search
          </div>
        ) : ( */}
        <AllSiteList />
        {/* )} */}
      </div>
    );
  }
}
