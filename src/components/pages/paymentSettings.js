import React, { Component } from "react";
// import ListGroup from "../common/listGroup";
import PaymentsSettingsCard from "../settingsCards/paymentsSettingsCard";
import MenuBar from "./../common/menuBar";

export default class paymentSettings extends Component {
  render() {
    return (
      <div className="container" style={{ height: "700px" }}>
        <div className="row">
          <div className="col-sm-4" style={{ position: "fixed" }}>
            {/* <ListGroup title="Billing" item1="Payments" link1="myPayments" /> */}
            <MenuBar />
          </div>
          <div className="col" style={{ marginLeft: "130px" }}>
            <h4 className="textBold">Payments & Billing</h4>
            <p className="card-text text-color-ash">Your Billing Information</p>
            <PaymentsSettingsCard />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
