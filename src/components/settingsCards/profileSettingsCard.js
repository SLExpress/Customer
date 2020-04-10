/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "../common/form";
import auth from "../../services/authService";
import { getCustomer, updateCustomer } from "../../services/userService";
import Joi from "joi-browser";
import Swal from "sweetalert2";

class profileSettingsCard extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      contactNo: "",
    },
    errors: {},
    isUpdated: false,
  };

  schema = {
    id: Joi.string(),
    firstname: Joi.string().min(4).required().label("Firstname"),
    lastname: Joi.string().min(4).required().label("Lastname"),
    username: Joi.string().min(4).required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    contactNo: Joi.number().required().label("ContactNo"),
  };

  async populateCustomer() {
    try {
      const { data: customer } = await getCustomer();

      this.setState({ data: this.mapToViewModel(customer) });
    } catch (ex) {}
  }

  async componentDidMount() {
    await this.populateCustomer();
  }

  mapToViewModel(customer) {
    return {
      id: customer._id,
      firstname: customer.firstName,
      lastname: customer.lastName,
      username: customer.username,
      email: customer.email,
      password: customer.password,
      contactNo: customer.phone,
    };
  }

  doSubmit = async () => {
    try {
      const Jwt = auth.getCurrentUserID();
      const id = Jwt.userId;
      const { data } = this.state;
      await updateCustomer(
        id,
        data.firstname,
        data.lastname,
        data.username,
        data.email,
        data.contactNo
      );

      localStorage.setItem("lastname", data.lastname);
      localStorage.setItem("firstname", data.firstname);
      localStorage.setItem("username", data.username);
      this.setState({ isUpdated: true });

      Swal.fire({
        icon: "success",
        title: "Successful",
        text: "Your profile updated successfully",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location = "/myAccount";
      });
    } catch (ex) {}
  };

  updateMessage = () => {
    if (this.state.isUpdated === true) {
      return (
        <div className="alert alert-success" style={{ width: "250px" }}>
          Customer data has been succussfully updated !
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header textBold">Edit Profile</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {this.renderFormInput("firstname", "Firstname")}
              {this.renderFormInput("lastname", "Lastname")}
              {this.renderFormInput("username", "Username")}
              {this.renderFormInput("email", "Email", "email")}
              {this.renderFormInput("contactNo", "ContactNo")}
              {this.renderButton("Save")}
              <br />
              {/* {this.updateMessage()} */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default profileSettingsCard;
