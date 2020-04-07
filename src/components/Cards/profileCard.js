import React from "react";
import { Buttons } from "../table/buttons";
import { Link } from "react-router-dom";

const profileCard = ({ title, buttonName, customer }) => {
  return (
    <div className="card">
      <div className="card-header textBold">{title}</div>

      <div className="card-body">
        <h6 className="card-title text-color-ash">{`First Name: ${customer.firstName}`}</h6>
        <h6 className="card-title text-color-ash ">{`Last Name: ${customer.lastName}`}</h6>
        <h6 className="card-title text-color-ash ">{`User Name:  ${customer.username}`}</h6>
        <h6 className="card-title text-color-ash">{`Email:  ${customer.email}`}</h6>
        <h6 className="card-title text-color-ash">{`Contact No:  ${customer.phone}`}</h6>
        <Link to="/accountSettings" style={{ textDecoration: "none" }}>
          <Buttons color="#40a3dc" name={buttonName} />
        </Link>
      </div>
    </div>
  );
};

export default profileCard;
