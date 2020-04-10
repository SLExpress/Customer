/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Buttons } from "../table/buttons";
import { Link } from "react-router-dom";
import { ProductContext } from "./../../context";

class deleteCard extends Component {
  static contextType = ProductContext;

  render() {
    const { title, buttonName, onDelete } = this.props;
    return (
      <div className="card">
        <div className="card-header textBold">{title}</div>

        <div className="card-body">
          <h6 className="card-title text-color-ash">
            Once you delete your account, there is no going back. Please be
            certain.
          </h6>

          <Link
            onClick={onDelete}
            style={{ textDecoration: "none" }}
            to="/myAccount"
          >
            <Buttons color="#e60000" name={buttonName} />
          </Link>
        </div>
      </div>
    );
  }
}

export default deleteCard;
