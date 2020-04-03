import React, { Component } from "react";
import PaymentForm from "../paymentForm/paymentForm";

class payment extends Component {
  render() {
    if (this.props.location.query === undefined) {
      var orderId = localStorage.getItem("orderId");
    } else {
      orderId = this.props.location.query.orderId;
      localStorage.setItem("orderId", orderId);
      console.log(orderId);
    }

    if (this.props.location.query === undefined) {
      var developerId = localStorage.getItem("developerId");
    } else {
      developerId = this.props.location.query.developerId;
      localStorage.setItem("developerId", developerId);
      console.log(developerId);
    }

    const userId = this.props.value;
    console.log(userId);

    return (
      <div className="container mb-5 mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <PaymentForm
              orderId={orderId}
              developerId={developerId}
              userId={userId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default payment;
