/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import AllSiteList from "./../sites/allSiteList";
import Loader from "./../common/loader";
import { ProductContext } from ".././../context";

export default class allThemes extends Component {
  static contextType = ProductContext;

  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <div>
        <AllSiteList />
      </div>
    );
  }
}
