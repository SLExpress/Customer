/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Loader from "./../common/loader";
import SiteList from "./../sites/siteList";
import { ProductContext } from ".././../context";

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
      <div style={{ height: "900px" }}>
        <SiteList path={path} />
      </div>
    );
  }
}
