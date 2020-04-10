/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Title from "../common/title";
import { Container, Divider, Grid, Header, Segment } from "semantic-ui-react";

export default class aboutus extends Component {
  render() {
    return (
      <div className="mt-5">
        <Title title="About Us" center="true" />
        <Segment vertical>
          <Container text>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              <a href="/aboutus">Our Vision</a>
            </Divider>

            <p style={{ fontSize: "1m" }}>
              Our vision is to unleash the full potential of the amazing pool of
              software engineers in Sri Lanka by providing world-class
              outsourcing services.
            </p>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em", textTransform: "uppercase" }}
            >
              <a href="/aboutus">Our Mission</a>
            </Divider>

            <p style={{ fontSize: "1em", paddingBottom: "4em" }}>
              Our main aim is to develop in a constant manner and become a
              leading performer in this competitive global marketplace.
              Fortunately, we have been able to gather a crew of professionals
              that can shape and mold their collective experiences, all of them
              possess the outstanding talent that can help to accelerate your
              organization.
            </p>
          </Container>
        </Segment>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h4" style={{ fontSize: "2em" }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: "1em" }}>
                  That is what they all say about us
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h4" style={{ fontSize: "2em" }}>
                  "The best collection of sites ever."
                </Header>
                <p style={{ fontSize: "1" }}>That is how they feel about us.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}
