import React, { Component } from "react";
import CategoryScreen from "./../categoryScreen/categoryScreen";
import CategoryMenu from "../common/categoryMenu";
import { ProductContext } from "../../context";
import Loader from "./../common/loader";

export default class categories extends Component {
  static contextType = ProductContext;
  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mt-4">
            <CategoryMenu />
          </div>
          <div
            className="col-sm-8"
            style={{ marginLeft: "-80px", marginTop: "-15px" }}
          >
            <CategoryScreen />
          </div>
        </div>
      </div>
    );
  }
}
