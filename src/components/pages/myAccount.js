import React, { Component } from "react";
import ProfileCard from "../Cards/profileCard";
// import ListGroup from "../common/listGroup";
import DeleteCard from "../Cards/deleteCard";
import PasswordCard from "../Cards/passwordCard";
import { deleteCustomer, getCustomer } from "../../services/userService";
import auth from "../../services/authService";
// import DataLoading from "../common/dataLoading";
import Loader from "./../common/loader";
// import Modal from "./../common/modal";
// import { ProductContext } from "./../../context";
import MenuBar from "./../common/menuBar";
import Swal from "sweetalert2";

export default class myAccount extends Component {
  // static contextType = ProductContext;
  state = {
    customer: {},
    isDeleted: false,
    loading: true
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
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          this.deleteProfile();
          Swal.fire("Deleted!", "Your account has been deleted.", "success");
        }
      });
    } catch (ex) {}
  };

  async deleteProfile() {
    await deleteCustomer();
    auth.logout();
    this.setState({ isDeleted: true });
    window.location = "/";
  }

  async populateCustomer() {
    try {
      const { data: customer } = await getCustomer();
      this.setState({ customer, loading: false });
    } catch (ex) {}
  }

  async componentDidMount() {
    await this.populateCustomer();
  }

  deleteMessage = () => {
    if (this.state.isDeleted === true) {
      return (
        <div className="alert alert-danger" style={{ width: "250px" }}>
          Account Succussfully Deleted
        </div>
      );
    }
  };

  render() {
    // const { open, show, close, size } = this.context;
    const { customer, loading, categories } = this.state;
    console.log(categories);
    if (loading) {
      //   return <DataLoading />;
      return <Loader />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mb-5" style={{ position: "fixed" }}>
            {/* <ListGroup
              title="General"
              item1="Profile"
              item2="Password"
              item3="Delete Account"
              link1="myAccount"
              link2="myAccount"
              link3="myAccount"
            /> */}
            <MenuBar />
          </div>
          <div className="col" style={{ marginLeft: "130px" }}>
            <h4 className="textBold">Profile</h4>
            <p className="card-text text-color-ash">
              Your Personal Information
            </p>
            <ProfileCard
              buttonType="blue"
              title="Personal Information"
              buttonName="Edit Profile"
              customer={customer}
            />
          </div>
        </div>
        {/* <br /> */}
        <div className="row">
          <div className="col-sm-4"></div>

          <div
            className="col"
            style={{ marginLeft: "-250px", marginTop: "30px" }}
          >
            <h4 className="textBold">Password</h4>
            <p className="card-text text-color-ash">
              Irreversible and destructive actions
            </p>
            <PasswordCard
              buttonType="blue"
              title="Password Reset"
              buttonName="Reset"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-4"></div>

          <div className="col" style={{ marginLeft: "-250px" }}>
            <h4 className="textBold">Delete Account</h4>
            <p className="card-text text-color-ash">
              Irreversible and destructive actions
            </p>
            <DeleteCard
              onDelete={this.handleDelete}
              title="Delete User"
              buttonName="Delete"
            />

            <br />
            {this.deleteMessage()}
          </div>
        </div>
        <br />
      </div>
    );
  }
}
