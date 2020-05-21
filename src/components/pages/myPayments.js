/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import PaymentCard from "../cards/paymentCard";
import PaymentDeleteCard from "../cards/paymentDeleteCard";
import MenuBar from "./../common/menuBar";
import Loader from "./../common/loader";
import {
  getPaymentDetails,
  deletePaymentDetails,
} from "./../../services/paymentService";
import Swal from "sweetalert2";
import { Button, Segment, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class myPayments extends Component {
  state = {
    customer: {},
    isDeleted: false,
    loading: true,
    error: false,
  };

  handleDelete = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.deletePaymentInfo();
          Swal.fire(
            "Deleted!",
            "Your payment  details has been deleted.",
            "success"
          );
        }
      });
    } catch (ex) {}
  };

  async deletePaymentInfo() {
    await deletePaymentDetails();
    this.setState({ isDeleted: true });
    window.location = "/myPayments";
  }

  async populateCustomer() {
    try {
      const { data: customer } = await getPaymentDetails();
      this.setState({ customer, loading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        this.setState({ error: true, loading: false });
      }
    }
  }

  async componentDidMount() {
    await this.populateCustomer();
  }

  deleteMessage = () => {
    if (this.state.isDeleted === true) {
      return (
        <div className="alert alert-danger" style={{ width: "250px" }}>
          Payment Details Successfully Deleted
        </div>
      );
    }
  };
  render() {
    const { customer, loading, error } = this.state;

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
            <MenuBar />
          </Grid.Column>

          <Grid.Column width={11} phone={11} tablet={11} computer={11}>
            {!error && (
              <div>
                <h4 className="textBold">Payments & Billing</h4>
                <p className="card-text text-color-ash mb-5">
                  Your Payment Information
                </p>
                <PaymentCard
                  buttonType="blue"
                  title="Biiling Information"
                  buttonName="Edit"
                  customer={customer}
                  error={error}
                />
                <h4 className="textBold">Delete Info</h4>
                <p className="card-text text-color-ash">
                  Irreversible and destructive actions
                </p>
                <PaymentDeleteCard
                  onDelete={this.handleDelete}
                  title="Delete Payment Info"
                  buttonName="Delete"
                  error={error}
                />
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
