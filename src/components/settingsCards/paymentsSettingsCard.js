/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "../common/form";
import {
  updatePaymentDetails,
  getPaymentDetails,
} from "./../../services/paymentService";
import Joi from "joi-browser";

import Swal from "sweetalert2";

class paymentsSettingsCard extends Form {
  state = {
    data: {
      nameOnCard: "",
      cardNo: "",
      expDate: "",
      cvv: "",
    },
    errors: {},
    isUpdated: false,
    loading: true,
  };

  schema = {
    nameOnCard: Joi.string().required().label("NameOnCard"),
    expDate: Joi.string().required().label("ExpDate"),
    cardNo: Joi.number().min(16).required().label("CardNo"),
    cvv: Joi.number().min(3).required().label("Cvv"),
  };

  async populatePaymentDetails() {
    try {
      const { data: payment } = await getPaymentDetails();

      this.setState({ data: this.mapToViewModel(payment) });
    } catch (ex) {}
  }

  async componentDidMount() {
    await this.populatePaymentDetails();
  }

  mapToViewModel(payment) {
    return {
      nameOnCard: payment.cardName,
      cardNo: payment.cardNumber,
      expDate: payment.expiry,
      cvv: payment.cvv,
    };
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await updatePaymentDetails(
        data.cardNo,
        data.nameOnCard,
        data.cvv,
        data.expDate
      );
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Your payment details updated successfully",
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
          <div className="card-header textBold">Edit Payments </div>

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

export default paymentsSettingsCard;
