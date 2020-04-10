/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Title from "../common/title";
import PricingScreen from "./../pricing/pricingScreen";

export default class pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <Title title="Premium Plans" center="true" />
        </div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <small
            className="text-muted text-center"
            style={{ fontSize: "1rem" }}
          >
            SLExpress gives you 100s of templates, unlimited pages & top grades
            hosting FREE. Upgrade to Premium and get even more.
          </small>
        </div>

        <div className="container">
          <PricingScreen />
        </div>
      </React.Fragment>
    );
  }
}
