/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import AddPaymentCard from "./../settingsCards/addPaymentCard";
import MenuBar from "./../common/menuBar";

class addPaymentDetails extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <MenuBar />
          </div>
          <div
            className="col"
            style={{ marginLeft: "100px", marginTop: "-800px" }}
          >
            <h4 className="textBold">Payments & Billing</h4>
            <p className="card-text text-color-ash">Your Payment Information</p>
            <AddPaymentCard />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
// style={{ height: "700px" }}

// style={{ position: "fixed" }}

export default addPaymentDetails;
