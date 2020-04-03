import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import Loading from "./../common/loading";
import { ProductContext } from "./../../context";
// import styled from "styled-components";
// import Hosting from "../../images/hosting.png";
import { createWebsite } from "./../../services/siteCategoryService";
import Swal from "sweetalert2";
import {
  // Button,
  Divider,
  Grid,
  Header,
  Icon,
  // Search,
  Segment
} from "semantic-ui-react";

class addDomainScreen extends Form {
  // Accessing context API
  static contextType = ProductContext;

  state = {
    data: { subdomain: "", script: this.props.script },
    errors: {},
    loading: false,
    time: 90,
    siteCreatedTime: "",
    serverTime: ""
  };

  fetchData = () => {
    this.setState({ loading: true });
  };

  async reduceTimer(id) {
    await setInterval(async () => {
      if (this.state.time !== 0) {
        this.setState(prevState => {
          return { time: prevState.time - 1 };
        });
      } else {
        window.location = `/siteCreateSettings/${id}/${this.state.data.subdomain}`;
      }
    }, 1000);
  }

  schema = {
    subdomain: Joi.string()
      .required()
      .min(4)
      .label("Subdomain"),
    script: Joi.string()
      .required()
      .label("Script")
  };

  // doSubmit = () => {
  //   try {
  //     const { data } = this.state;
  //     console.log(data);
  //     this.context.handleCreateWebsite(data.subdomain, data.script);
  //     this.fetchData();
  //     this.reduceTimer(data.script);
  //     this.context.setSingleSiteSettingsCreate(data.script);
  //   } catch (ex) {}
  // };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      console.log(data);
      const { data: info } = await createWebsite(data.subdomain, data.script);
      this.setState({
        siteCreatedTime: info.createdDate,
        serverTime: info.serverTimestamp
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
          title: ex.response.data.error,
          showConfirmButton: true
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
      // <div className="container">
      //   <BannerWrapper>
      //     <div className="container">
      //       <div className="row align-items-center">
      //         <div className="col-md-6 col-lg-6">
      //           <div className="row align-items-end">
      //             <div
      //               className="col-12"
      //               style={{
      //                 paddingRight: "13rem"
      //               }}
      //             >
      //               <h4>Find Your Perfect Domain Name</h4>
      //             </div>

      //             <div className="mt-5 mb-5"></div>
      //           </div>
      //         </div>
      //         <div className="vl"></div>
      //         <div className="col">
      //           <form onSubmit={this.handleSubmit}>
      //             <center>{this.renderAddDomainInput("subdomain")}</center>
      //           </form>
      //         </div>
      //       </div>
      //     </div>
      //   </BannerWrapper>
      // </div>

      <Segment placeholder size="small" style={{ height: "600px" }}>
        <Grid columns={2} stackable textAlign="center">
          <Divider vertical></Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <p style={{ fontSize: "4rem" }}>Find Your Perfect Domain Name</p>
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="search" />
                Find Domain
              </Header>
              <form onSubmit={this.handleSubmit}>
                <center>{this.renderAddDomainInput("subdomain")}</center>
              </form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default addDomainScreen;

// Styled Component
// const BannerWrapper = styled.div`
//   width: 100%;
//   min-height: calc(100vh - 190px);
//   display: flex;
//   align-items: center;

//   /* brings content to the mid  update when device changes*/
//   padding-bottom: 6rem;

//   img {
//     width: 100%;
//   }

//   h4 {
//     font-size: 4rem;
//     color: #2fa7d9;
//     text-align: center;

//     @media (max-width: 992px) {
//       font-size: 3rem;
//     }
//   }

//   h3 {
//     font-size: 2rem;
//     color: #2fa7d9;
//   }

//   p {
//     font-size: 1.2rem;
//     color: #2fa7d9;
//   }

//   // button {
//   //   margin-left: 65%;
//   //   position: relative;
//   //   z-index: 1;
//   //   text-align: center;
//   //   min-width: 205px;
//   //   height: 50px;
//   //   line-height: 50px;
//   //   font-size: 21px;
//   //   font-weight: 600;
//   //   display: inline-block;
//   //   padding: 0 40px;
//   //   text-align: center;
//   //   text-transform: capitalize;
//   //   color: #fff;
//   //   background-color: #2fa7d9;
//   //   border: none;
//   //   border-radius: 100px;
//   //   -webkit-transition-duration: 500ms;
//   //   -o-transition-duration: 500ms;
//   //   transition-duration: 500ms;
//   //   outline: none;
//   //   margin-top: 2rem;
//   //   margin-bottom: 2rem;

//   //   @media (max-width: 414px) {
//   //     margin-left: 52%;
//   //   }

//   //   @media (max-width: 375px) {
//   //     margin-left: 41%;
//   //   }

//   //   @media (max-width: 320px) {
//   //     margin-left: 28%;
//   //   }

//   //   &:hover {
//   //     color: #fff;
//   //     background-color: #1c66de;
//   //   }
//   // }
// `;
