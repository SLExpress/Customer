import React from "react";
import PayForm from "../common/payForm";
import { getPayment } from "./../../services/paymentService";
import Payhere from "../../images/Payhere.png";
import AmericanExpress from "../../images/AmericanExpress.png";
import Cirrus from "../../images/Cirrus.png";
import Discover from "../../images/Discover.png";
import Maestro from "../../images/Maestro.png";
import MasterCard from "../../images/MasterCard.png";
import Visa from "../../images/Visa.png";
import Joi from "joi-browser";

class paymentForm extends PayForm {
  state = {
    data: {
      merchant_id: "",
      return_url: "http://localhost:3000/returnPage",
      cancel_url: "",
      notify_url: "http://slexpress.tk:3000/payment/processPayment",
      order_id: this.props.orderId,
      custom_1: this.props.userId,
      custom_2: this.props.developerId,
      items: "",
      currency: "",
      amount: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: ""
    },
    errors: {}
  };

  schema = {
    merchant_id: Joi.string()
      .required()
      .label("merchant_id"),
    return_url: Joi.string()
      .required()
      .label("return_url"),
    cancel_url: Joi.string()
      .required()
      .label("cancel_url"),
    notify_url: Joi.string()
      .required()
      .label("notify_url"),
    custom_1: Joi.string()
      .required()
      .label("custom_1"),
    custom_2: Joi.string()
      .required()
      .label("custom_2"),
    order_id: Joi.string()
      .required()
      .label("order_id"),
    items: Joi.string()
      .required()
      .label("items"),
    currency: Joi.string()
      .required()
      .label("currency"),
    amount: Joi.string()
      .required()
      .label("amount"),
    first_name: Joi.string()
      .required()
      .label("first_name"),
    last_name: Joi.string()
      .required()
      .label("last_name"),
    email: Joi.string()
      .required()
      .label("email"),
    phone: Joi.string()
      .required()
      .label("phone"),
    address: Joi.string()
      .required()
      .label("address"),
    city: Joi.string()
      .required()
      .label("city"),
    country: Joi.string()
      .required()
      .label("country")
  };

  async populatePayment() {
    try {
      const { data } = this.state;
      const { data: info } = await getPayment(data.order_id);
      console.log(info);
      this.setState({ data: this.mapToViewModel(info) });
    } catch (ex) {}
  }

  async componentDidMount() {
    const { orderId } = this.props;
    console.log(orderId);

    await this.populatePayment();
  }

  mapToViewModel(info) {
    return {
      merchant_id: info.data.payhereMerchantId,
      amount: info.data.price,
      currency: info.data.payhereCurrency,
      hash: info.data.hash
    };
  }

  doSubmit = async () => {};

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header textBold">Billing Information</div>
          <div className="card-body">
            <form
              method="post"
              action="https://sandbox.payhere.lk/pay/checkout"
              onSubmit={this.handleSubmit}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    {this.renderInput("first_name", "Firstname")}
                  </div>
                  <div className="col-sm">
                    {this.renderInput("last_name", "Lastname")}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    {this.renderInput("email", "Email")}
                  </div>
                  <div className="col-sm">
                    {this.renderInput("phone", "Phone")}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    {this.renderInput("address", "Address")}
                  </div>
                  <div className="col-sm">
                    {this.renderInput("city", "City")}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    {this.renderInput("country", "Country")}
                  </div>
                  <div className="col-sm paymentCard">
                    <span>
                      <img src={AmericanExpress} alt="card" />
                    </span>
                    <span>
                      <img src={Cirrus} alt="card" />
                    </span>
                    <span>
                      <img src={Discover} alt="card" />
                    </span>
                    <span>
                      <img src={Maestro} alt="card" />
                    </span>
                    <span>
                      <img src={MasterCard} alt="card" />
                    </span>
                    <span>
                      <img src={Visa} alt="card" />
                    </span>
                  </div>
                </div>
              </div>
              {this.renderInput("merchant_id", "", "hidden")}
              {this.renderInput("return_url", "", "hidden")}
              {this.renderInput("cancel_url", "", "hidden")}
              {this.renderInput("notify_url", "", "hidden")}
              {this.renderInput("order_id", "", "hidden")}
              {this.renderInput("custom_1", "", "hidden")}
              {this.renderInput("custom_2", "", "hidden")}
              {this.renderInput("items", "", "hidden")}
              {this.renderInput("currency", "", "hidden")}
              {this.renderInput("amount", "", "hidden")}

              <input
                name="submit"
                type="image"
                src={Payhere}
                style={{ width: "150px" }}
                value="Buy Now"
                alt="payhereButton"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default paymentForm;
