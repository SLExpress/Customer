/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import DomainListPage from "./../table/domainListPage";
import MenuBar from "./../common/menuBar";
import { Grid } from "semantic-ui-react";

class domainList extends Component {
  render() {
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
            <DomainListPage />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}

export default domainList;
