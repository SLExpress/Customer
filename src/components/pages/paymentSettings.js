/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import Loader from "./../common/loader";
import MenuBar from "./../common/menuBar";
import PaymentsSettingsCard from "../settingsCards/paymentsSettingsCard";
import { Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { getPaymentDetails } from "./../../services/paymentService";
import { ProductContext } from "../../context";
import { Grid } from "semantic-ui-react";

export default class paymentSettings extends Component {
  state = {
    error: false,
  };

  componentDidMount = async () => {
    try {
      await getPaymentDetails();
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        this.setState({ error: true });
      }
    }
  };

  static contextType = ProductContext;

  render() {
    const { error } = this.state;
    const { loading } = this.context;
    if (loading) {
      return <Loader />;
    }
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-sm-4">
      //       <MenuBar />
      //     </div>
      //     {!error && (
      //       <div
      //         className="col"
      //         style={{ marginLeft: "130px", marginTop: "-810px" }}
      //       >
      //         <h4 className="textBold">Payments & Billing</h4>
      //         <p className="card-text text-color-ash">
      //           Your Billing Information
      //         </p>
      //         <PaymentsSettingsCard />
      //       </div>
      //     )}

      //     {error && (
      //       <div>
      //         <Segment
      //           placeholder
      //           style={{
      //             width: "800px",
      //             height: "550px",
      //             marginLeft: "200px",
      //             marginTop: "-810px",
      //           }}
      //         >
      //           <Link to="/addPaymentDetails">
      //             <Button
      //               content="Add Payment Details"
      //               labelPosition="left"
      //               icon="edit"
      //               primary
      //             />
      //           </Link>
      //           <br />
      //           <center>
      //             <p>
      //               Once you add payment information, you'll find your payment
      //               information and details from SLExpress right here.
      //             </p>
      //           </center>
      //         </Segment>
      //       </div>
      //     )}
      //   </div>
      //   <br />
      // </div>

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
            {!error && (
              <div>
                <h4 className="textBold">Payments & Billing</h4>
                <p className="card-text text-color-ash">
                  Your Billing Information
                </p>
                <PaymentsSettingsCard />
              </div>
            )}

            {error && (
              <Segment
                placeholder
                style={{
                  height: "550px",
                }}
              >
                <Link to="/addPaymentDetails">
                  <Button
                    content="Add Payment Details"
                    labelPosition="left"
                    icon="edit"
                    primary
                  />
                </Link>
                <br />
                <center>
                  <p>
                    Once you add payment information, you'll find your payment
                    information and details from SLExpress right here.
                  </p>
                </center>
              </Segment>
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}
