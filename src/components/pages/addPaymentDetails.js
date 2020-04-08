import React, { Component } from "react";
import AddPaymentCard from "./../settingsCards/addPaymentCard";
import MenuBar from "./../common/menuBar";

class addPaymentDetails extends Component {
  render() {
    return (
      <div className="container" style={{ height: "700px" }}>
        <div className="row">
          <div className="col-sm-4" style={{ position: "fixed" }}>
            <MenuBar />
          </div>
          <div className="col" style={{ marginLeft: "130px" }}>
            <h4 className="textBold">Profile</h4>
            <p className="card-text text-color-ash">
              Your Personal Information
            </p>
            <AddPaymentCard />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default addPaymentDetails;
