/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import MenuBar from "./../common/menuBar";
import PaymentHistoryScreen from "./../paymentHistory/paymentHistoryScreen";

class singlePaymentHistory extends Component {
  state = {};
  render() {
    return (
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-sm-4 mb-5">
            <MenuBar />
          </div>
          <div className="col mb-5" style={{ marginLeft: "-300px" }}>
            <PaymentHistoryScreen />
          </div>
        </div>
      </div>
    );
  }
}

export default singlePaymentHistory;
