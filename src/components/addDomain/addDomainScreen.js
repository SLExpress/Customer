/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Loading from "./../common/loading";
import MenuBar from "./../common/menuBar";
import { ProductContext } from "./../../context";
import { createWebsite } from "./../../services/siteCategoryService";
import { Segment, Grid, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import Joi from "joi-browser";

class addDomainScreen extends Component {
  // Accessing context API
  static contextType = ProductContext;

  state = {
    data: { subdomain: "", script: this.props.script },
    errors: {},
    loading: false,
    time: 90,
    siteCreatedTime: "",
    serverTime: "",
  };

  fetchData = () => {
    this.setState({ loading: true });
  };

  async reduceTimer(id, subdomain) {
    await setInterval(async () => {
      if (this.state.time !== 0) {
        this.setState((prevState) => {
          return { time: prevState.time - 1 };
        });
      } else {
        window.location = `/siteCreateSettings/${id}/${subdomain}`;
      }
    }, 1000);
  }

  schema = {
    subdomain: Joi.string().required().min(4).label("Subdomain"),
    script: Joi.string().required().label("Script"),
  };

  handleAddDomain = async (subdomain, script) => {
    try {
      const { data } = this.state;
      const { data: info } = await createWebsite(subdomain, script);
      this.setState({
        siteCreatedTime: info.createdDate,
        serverTime: info.serverTimestamp,
        subdomain: subdomain,
      });

      localStorage.setItem("siteCreatedTime", this.state.siteCreatedTime);
      localStorage.setItem("serverTime", this.state.serverTime);
      this.fetchData();
      this.reduceTimer(data.script, subdomain);
      this.context.setSingleSiteSettingsCreate(data.script);
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        Swal.fire({
          icon: "info",
          title: "Sorry",
          text: ex.response.data.error,
          showConfirmButton: true,
        });
      }
    }
  };

  handleAdd = async () => {
    const { data } = this.state;
    try {
      Swal.fire({
        title: "Add  Domain",
        input: "text",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Add",
      }).then((result) => {
        if (result.value) {
          const subdomain = result.value;
          this.handleAddDomain(subdomain, data.script);
        }
      });
    } catch (error) {}
  };

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading time={this.state.time} />;
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
            <Segment
              placeholder
              style={{
                height: "550px",
              }}
            >
              <br />
              <Button
                onClick={this.handleAdd}
                content="Add domain"
                labelPosition="left"
                icon="plus square"
                color="green"
              />
              <br />
              <center>
                <p style={{ fontWeight: "bold" }}>
                  Add your preferred domain name to create and host the website
                  on SLExpress server.
                </p>
                <p style={{ fontWeight: "bold" }}>
                  domain name must be at least four charcters long.
                </p>
              </center>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}

export default addDomainScreen;
