import React, { Component } from "react";
import MysitesCard from "../mySites/mySitesCard";
// import CategoryMenu from "./../common/categoryMenu";
// import MenuBar from "./../common/menuBar";
import { ProductContext } from "../../context";
import Loader from "./../common/loader";

export default class mySites extends Component {
  static contextType = ProductContext;
  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      // <div className="mb-5">
      //   <MysitesCard />
      //   <br />
      // </div>
      <div className="container mb-5">
        {/* <div className="row"> */}
        {/* <div className="col-sm-3 mt-4 mb-4">
            <MenuBar />
          </div> */}
        {/* <div className="col-sm-8 " style={{ marginLeft: "-40px" }}> */}
        <MysitesCard />
        {/* </div> */}
      </div>
      // </div>
    );
  }
}
