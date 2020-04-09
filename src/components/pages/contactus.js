import React, { Component } from "react";
import Title from "../common/title";
import Hosting from "./../../images/hosting.png";
import { Grid, Header, Image, Segment } from "semantic-ui-react";

export default class contactus extends Component {
  render() {
    return (
      <div className="mt-5">
        <Title title="Contact Us" center="true" />
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h6" style={{ fontSize: "1.2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1em" }}>
                  We can give your company superpowers to do things that they
                  never thought possible. Let us delight your customers and
                  empower your needs... through pure data analytics.
                </p>
                <Header as="h6" style={{ fontSize: "1.2em" }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: "1em" }}>
                  Yes that's right, you thought it was the stuff of dreams, but
                  even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image src={Hosting} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row></Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
