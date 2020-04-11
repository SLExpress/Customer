/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "../common/form";
import { addPaymentDetails } from "./../../services/paymentService";
import Joi from "joi-browser";
import Swal from "sweetalert2";

class addPaymentCard extends Form {
  state = {
    data: {
      nameOnCard: "",
      cardNo: "",
      expDate: "",
      cvv: "",
    },
    errors: {},
  };

  schema = {
    nameOnCard: Joi.string().required().label("NameOnCard"),
    expDate: Joi.string().required().label("ExpDate"),
    cardNo: Joi.number().min(16).required().label("CardNo"),
    cvv: Joi.number().min(3).required().label("Cvv"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await addPaymentDetails(
        data.cardNo,
        data.nameOnCard,
        data.cvv,
        data.expDate
      );
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Payment info added successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location = "/myPayments";
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 500) {
        const errors = { ...this.state.errors };
        errors.cvv = "Invalid types of details";
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header textBold">Add Payment Details</div>

          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
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

export default addPaymentCard;
