/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import LandingPageScreen from "./../landingPage/landingPageScreen";

class landingPage extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          paddingTop: "5rem",
          paddingBottom: "15rem",
          paddingLeft: "3rem",
        }}
      >
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <LandingPageScreen />
          </div>
        </div>
      </div>
    );
  }
}

export default landingPage;
