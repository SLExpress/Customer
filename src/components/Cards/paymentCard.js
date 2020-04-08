import React from "react";
import { Buttons } from "../table/buttons";
import { Link } from "react-router-dom";

const paymentCard = ({ title, buttonName, customer }) => {
  return (
    <div className="card mb-5">
      <div className="card-header textBold">{title}</div>
      <div className="card-body mb-5">
        <h6 className="card-title text-color-ash">{`Name on the card: ${customer.cardName}`}</h6>
        <h6 className="card-title text-color-ash ">{`Card No: ${customer.cardNumber}`}</h6>
        <h6 className="card-title text-color-ash ">{`Expiry Date:  ${customer.expiry}`}</h6>
        <h6 className="card-title text-color-ash">{`CVV:  ${customer.cvv}`}</h6>
        <Link to="/paymentSettings" style={{ textDecoration: "none" }}>
          <Buttons color="#40a3dc" name={buttonName} />
        </Link>
      </div>
    </div>
  );
};

export default paymentCard;
