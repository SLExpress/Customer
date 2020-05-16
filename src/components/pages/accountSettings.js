/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Loader from "./../common/loader";
import MenuBar from "./../common/menuBar";
import ProfileSettingsCard from "../settingsCards/profileSettingsCard";
import PasswordSettingsCard from "../settingsCards/passwordSettingsCard";
import { ProductContext } from "../../context";
import { Grid } from "semantic-ui-react";

export default class accountSettings extends Component {
  static contextType = ProductContext;
  render() {
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={3}
            phone={3}
            tablet={3}
            computer={3}
            style={{ marginLeft: "30px" }}
          >
            <MenuBar />
          </Grid.Column>

          <Grid.Column width={11} phone={11} tablet={11} computer={11}>
            <h4 className="textBold">Profile</h4>
            <p className="card-text text-color-ash">
              Your Personal Information
            </p>
            <ProfileSettingsCard />
            <h4 className="textBold">Password</h4>
            <p className="card-text text-color-ash">Reset Password</p>
            <PasswordSettingsCard />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}
