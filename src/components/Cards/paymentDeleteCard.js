/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Buttons } from "../table/buttons";
import { Link } from "react-router-dom";

class paymentDeleteCard extends Component {
  render() {
    const { title, buttonName, onDelete } = this.props;
    return (
      <div className="card">
        <div className="card-header textBold">{title}</div>
        <div className="card-body">
          <h6 className="card-title text-color-ash">
            If you wish to delete payment details click here
          </h6>
          <Link onClick={onDelete} style={{ textDecoration: "none" }}>
            <Buttons color="#e60000" name={buttonName} />
          </Link>
        </div>
      </div>
    );
  }
}

export default paymentDeleteCard;
