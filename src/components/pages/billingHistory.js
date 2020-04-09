import React, { Component } from "react";
import PaymentHistoryPage from "../table/paymentHistoryPage";
import MenuBar from "./../common/menuBar";

class billingHistory extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 mb-5">
              <MenuBar />
            </div>
            <div className="col mt-3" style={{ marginLeft: "80px" }}>
              <PaymentHistoryPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default billingHistory;
