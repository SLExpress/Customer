import React, { Component } from "react";
import ForgotPasswordForm from "./../forgotPasswordForm/forgotPasswordForm";

export default class forgotPassword extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          paddingTop: "5rem",
          paddingBottom: "20rem",
          paddingLeft: "3rem"
        }}
      >
        <div className="row justify-content-md-center mb-5">
          {/* <div className="col col-lg-2">1 of 3</div> */}
          <div className="col-md-auto">
            <ForgotPasswordForm />
          </div>
          {/* <div className="col col-lg-2">3 of 3</div> */}
        </div>
      </div>
    );
  }
}
