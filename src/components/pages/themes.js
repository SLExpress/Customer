import React, { Component } from "react";
// import Title from "../common/title";
import SiteList from "./../sites/siteList";
import { ProductContext } from ".././../context";
import Loader from "./../common/loader";

export default class themes extends Component {
  static contextType = ProductContext;
  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    const path = window.location.pathname;
    console.log(path);

    return (
      <div>
        {/* <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <Title title="Premium Themes" center="true" />
        </div> */}
        <SiteList path={path} />
      </div>
    );
  }
}
