import React, { Component } from "react";
import PaymentHistoryPage from "../table/paymentHistoryPage";
import MenuBar from "./../common/menuBar";

class billingHistory extends Component {
  render() {
    return (
      <div style={{ marginBottom: "250px" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mb-5" style={{ position: "fixed" }}>
              <MenuBar />
            </div>
            <div className="col mt-3" style={{ marginLeft: "130px" }}>
              <PaymentHistoryPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default billingHistory;
