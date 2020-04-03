import React from "react";
// import Button from "../common/button";
import { Link } from "react-router-dom";
import { Buttons } from "../table/buttons";

const passwordCard = ({ buttonType, title, buttonName }) => {
  return (
    <div className="card">
      <div className="card-header textBold">{title}</div>
      <div className="card-body">
        <h6 className="card-title text-color-ash">{`Password: *************************`}</h6>
        <Link to="/accountSettings" style={{ textDecoration: "none" }}>
          {/* <Button buttonName={buttonName} buttonType={buttonType} /> */}
          <Buttons color="#40a3dc" name={buttonName} />
        </Link>
      </div>
    </div>
  );
};

export default passwordCard;
