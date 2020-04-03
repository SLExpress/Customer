import React, { Component } from "react";
import MenuBar from "./../common/menuBar";
import PaymentHistoryScreen from "./../paymentHistory/paymentHistoryScreen";

class singlePaymentHistory extends Component {
  state = {};
  render() {
    return (
      <div className="container mb-5" style={{ height: "600px" }}>
        <div className="row mb-5">
          <div className="col-sm-4 mb-5" style={{ position: "fixed" }}>
            <MenuBar />
          </div>
          <div className="col mb-5" style={{ marginLeft: "130px" }}>
            <PaymentHistoryScreen />
          </div>
        </div>
      </div>
    );
  }
}

export default singlePaymentHistory;
