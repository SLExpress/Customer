/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { Buttons } from "../table/buttons";
import { Link } from "react-router-dom";

const passwordCard = ({ title, buttonName }) => {
  return (
    <div className="card">
      <div className="card-header textBold">{title}</div>
      <div className="card-body">
        <h6 className="card-title text-color-ash">{`Password: *************************`}</h6>
        <Link to="/accountSettings" style={{ textDecoration: "none" }}>
          <Buttons color="#40a3dc" name={buttonName} />
        </Link>
      </div>
    </div>
  );
};

export default passwordCard;
