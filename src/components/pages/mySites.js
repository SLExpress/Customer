import React, { Component } from "react";
import MysitesCard from "../mySites/mySitesCard";
import Loader from "./../common/loader";
import { ProductContext } from "../../context";

export default class mySites extends Component {
  static contextType = ProductContext;
  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <div className="container mb-5">
        <MysitesCard />
      </div>
    );
  }
}
