/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import ResendEmailForm from "./../resendEmail/resendEmailForm";

export default class resendEmail extends Component {
  render() {
    return (
      <div
        className="container mb-5"
        style={{
          paddingTop: "5rem",
          paddingBottom: "20rem",
          paddingLeft: "3rem",
        }}
      >
        <div className="row justify-content-md-center mb-5">
          <div className="col-md-auto">
            <ResendEmailForm />
          </div>
        </div>
      </div>
    );
  }
}
