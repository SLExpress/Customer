/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import CategoryScreen from "./../categoryScreen/categoryScreen";
import CategoryMenu from "../common/categoryMenu";
import { ProductContext } from "../../context";
import Loader from "./../common/loader";
import { Grid } from "semantic-ui-react";

export default class categories extends Component {
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
            <CategoryMenu />
          </Grid.Column>

          <Grid.Column width={11} phone={11} tablet={11} computer={11}>
            <CategoryScreen />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}
