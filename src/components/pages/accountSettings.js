import React, { Component } from "react";
import Loader from "./../common/loader";
import MenuBar from "./../common/menuBar";
import ProfileSettingsCard from "../settingsCards/profileSettingsCard";
import PasswordSettingsCard from "../settingsCards/passwordSettingsCard";
import { ProductContext } from "../../context";

export default class accountSettings extends Component {
  static contextType = ProductContext;
  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4" style={{ position: "fixed" }}>
            <MenuBar />
          </div>
          <div className="col" style={{ marginLeft: "130px" }}>
            <h4 className="textBold">Profile</h4>
            <p className="card-text text-color-ash">
              Your Personal Information
            </p>
            <ProfileSettingsCard />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-4"></div>

          <div className="col" style={{ marginLeft: "130px" }}>
            <h4 className="textBold">Password</h4>
            <p className="card-text text-color-ash">Reset Password</p>
            <PasswordSettingsCard />
          </div>
        </div>
        <br />
      </div>
    );
  }
}
