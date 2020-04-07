import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class paymentsSettingsCard extends Form {
  state = {
    data: {
      cardType: "",
      nameOnCard: "",
      cardNo: "",
      expDate: "",
      cvv: ""
    },
    errors: {}
  };

  schema = {
    cardType: Joi.string()
      .required()
      .label("Card Type"),
    nameOnCard: Joi.string()
      .required()
      .label("NameOnCard"),
    expDate: Joi.string()
      .required()
      .label("ExpDate"),
    cardNo: Joi.string()
      .min(4)
      .required()
      .label("CardNo"),
    cvv: Joi.string()
      .required()
      .label("Cvv")
  };

  doSubmit = () => {
    // Call the server
    console.log("Updated Payments");
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header textBold">Edit Payments </div>

          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {this.renderFormInput("cardType", "CardType")}
              {this.renderFormInput("nameOnCard", "NameOnCard")}
              {this.renderFormInput("cardNo", "CardNo")}
              {this.renderFormInput("expDate", "ExpDate")}
              {this.renderFormInput("cvv", "Cvv")}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default paymentsSettingsCard;
