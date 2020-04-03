import React, { Component } from "react";
import ProfileSettingsCard from "../settingsCards/profileSettingsCard";
import PasswordSettingsCard from "../settingsCards/passwordSettingsCard";
// import ListGroup from "../common/listGroup";
import { ProductContext } from "../../context";
import Loader from "./../common/loader";
import MenuBar from "./../common/menuBar";

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
            {/* <ListGroup
              title="General"
              item1="Profile"
              item2="Password"
              link1="myAccount"
              link2="myAccount"
            /> */}
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
