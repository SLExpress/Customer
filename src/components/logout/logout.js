/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import auth from "../../services/authService";
import DataLoading from "../common/dataLoading";

class logout extends Component {
  componentDidMount = () => {
    auth.logout();
    window.location = "/";
  };

  render() {
    return (
      <div
        className="container"
        style={{
          paddingTop: "5rem",
          paddingBottom: "20rem",
          paddingLeft: "3rem",
        }}
      >
        <DataLoading text="Logging out..." />
      </div>
    );
  }
}

export default logout;
