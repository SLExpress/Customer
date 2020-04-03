import React, { Component } from "react";
import PaymentCard from "../Cards/paymentCard";
// import ListGroup from "../common/listGroup";
import MenuBar from "./../common/menuBar";

export default class myPayments extends Component {
  render() {
    return (
      <div className="container" style={{ height: "700px" }}>
        <div className="row">
          <div className="col-sm-4" style={{ position: "fixed" }}>
            {/* <ListGroup
              title="Billing"
              item1="Payments"
              item2="Billing History"
              item3="Domains"
              link1="myPayments"
              link2="billingHistory"
              link3="domainList"
            /> */}
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
