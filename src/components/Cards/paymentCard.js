import React from "react";
// import Button from "../common/button";
import { Link } from "react-router-dom";
import { Buttons } from "../table/buttons";

const paymentCard = ({ title, buttonName }) => {
  return (
    <div className="card mb-5">
      <div className="card-header textBold">{title}</div>
      <div className="card-body mb-5">
        <h6 className="card-title text-color-ash">Card Type:</h6>
        <h6 className="card-title text-color-ash ">Name On Card:</h6>
        <h6 className="card-title text-color-ash ">Credit Card No:</h6>
        <h6 className="card-title text-color-ash">Exp Date:</h6>
        <h6 className="card-title text-color-ash">Cvv:</h6>
        <Link to="/paymentSettings" style={{ textDecoration: "none" }}>
          {/* <Button buttonName={buttonName} buttonType={buttonType} /> */}
          <Buttons color="#40a3dc" name={buttonName} />
        </Link>
      </div>
    </div>
  );
};

export default paymentCard;
