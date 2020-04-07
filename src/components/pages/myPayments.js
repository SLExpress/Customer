import React, { Component } from "react";
import PaymentCard from "../Cards/paymentCard";
import MenuBar from "./../common/menuBar";

export default class myPayments extends Component {
  render() {
    return (
      <div className="container" style={{ height: "700px" }}>
        <div className="row">
          <div className="col-sm-4" style={{ position: "fixed" }}>
            <MenuBar />
          </div>
          <div className="col" style={{ marginLeft: "130px" }}>
            <h4 className="textBold">Payments & Billing</h4>
            <p className="card-text text-color-ash mb-5">
              Your Payment Information
            </p>
            <PaymentCard
              buttonType="blue"
              title="Biiling Information"
              buttonName="Edit"
            />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
