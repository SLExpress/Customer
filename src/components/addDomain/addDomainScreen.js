/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "./../common/form";
import Loading from "./../common/loading";
import MenuBar from "./../common/menuBar";
import { Header, Icon, Segment } from "semantic-ui-react";
import { ProductContext } from "./../../context";
import { createWebsite } from "./../../services/siteCategoryService";
import Swal from "sweetalert2";
import Joi from "joi-browser";

class addDomainScreen extends Form {
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

  async reduceTimer(id) {
    await setInterval(async () => {
      if (this.state.time !== 0) {
        this.setState((prevState) => {
          return { time: prevState.time - 1 };
        });
      } else {
        window.location = `/siteCreateSettings/${id}/${this.state.data.subdomain}`;
      }
    }, 1000);
  }

  schema = {
    subdomain: Joi.string().required().min(4).label("Subdomain"),
    script: Joi.string().required().label("Script"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      console.log(data);
      const { data: info } = await createWebsite(data.subdomain, data.script);
      this.setState({
        siteCreatedTime: info.createdDate,
        serverTime: info.serverTimestamp,
      });
      localStorage.setItem("siteCreatedTime", this.state.siteCreatedTime);
      localStorage.setItem("serverTime", this.state.serverTime);
      this.fetchData();
      this.reduceTimer(data.script);
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

  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading time={this.state.time} />;
    }
    return (
      <div style={{ marginBottom: "270px" }}>
        <div className="col-sm-4" style={{ marginLeft: "200px" }}>
          <MenuBar />
        </div>
        <Segment
          placeholder
          style={{
            width: "1100px",
            height: "550px",
            marginLeft: "340px",
            marginTop: "-810px",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <center>
              <Header icon>
                <Icon name="search" />
              </Header>
              {this.renderAddDomainInput("subdomain")}
            </center>
          </form>
          <br />
          <center>
            <p>Find your perfect domain</p>
          </center>
        </Segment>
      </div>
    );
  }
}

export default addDomainScreen;
