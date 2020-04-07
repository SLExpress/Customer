import React from "react";
import { Buttons } from "./../table/buttons";
import { Link } from "react-router-dom";

const singlePricingCard = ({ cardInfo }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{cardInfo.title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          {cardInfo.price} <small className="text-muted">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          <li>{cardInfo.feature1}</li>
          <li>{cardInfo.feature2}</li>
          <li>{cardInfo.feature3}</li>
          <li>{cardInfo.feature4}</li>
        </ul>
        <Link to={cardInfo.url} style={{ textDecoration: "none" }}>
          <center>
            <Buttons color="#40a3dc" name="Start" className="center" />
          </center>
        </Link>
      </div>
    </div>
  );
};

export default singlePricingCard;
