/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "../common/form";
import * as registerUser from "../../services/registerService";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import Joi from "joi-browser";
import Swal from "sweetalert2";

class RegisterForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      username: "",
      password1: "",
      email1: "",
      contactNo: "",
      userType: "customer",
      confirmPassword: "",
    },
    errors: {},
    isRegisterd: false,
    isResend: false,
  };

  schema = {
    firstname: Joi.string().min(4).required().label("Firstname"),
    lastname: Joi.string().min(4).required().label("Lastname"),
    username: Joi.string().min(4).required().label("Username"),
    password1: Joi.string().required().min(8).label("Password"),
    email1: Joi.string().email().required().label("Email"),
    contactNo: Joi.number().required().label("ContactNo"),
    userType: Joi.string(),
    confirmPassword: Joi.string().required().min(8).label("ConfirmPassword"),
  };

  doSubmit = async () => {
    // Call the server
    const { password1, confirmPassword } = this.state.data;

    if (password1 === confirmPassword) {
      try {
        await registerUser.register(this.state.data);
        Swal.fire({
          icon: "success",
          title: "Successfully Registered",
          text: "Please confirm your email address to continue",
          showConfirmButton: false,
          timer: 1500,
        });
        this.setState({ isRegisterd: true });
        setTimeout(() => {
          this.setState({ isResend: true });
        }, 60000);
      } catch (ex) {
        if (ex.response && ex.response.status === 422) {
          const errors = { ...this.state.errors };
          const exResponse = ex.response.data.errors;
          exResponse.forEach((e) => {
            const param = e.param;
            const msg = e.msg;
            if (param === "email") {
              errors.email1 = msg;
            }
            if (param === "username") {
              errors.username = msg;
            }

            this.setState({ errors });
          });
          console.log(ex.response);
        }
      }
    } else {
      const errors = { ...this.state.errors };
      const message = "Passwords does not match";
      errors.confirmPassword = message;
      this.setState({ errors });
    }
  };

  registerMessage = () => {
    if (this.state.isRegisterd === true) {
      return (
        <div className="alert alert-success" style={{ width: "250px" }}>
          Successfully Registered! confirm your email to continue
        </div>
      );
    }
  };

  setResendLink = () => {
    if (this.state.isResend === true) {
      return (
        <Link
          style={{ textDecoration: "none" }}
          to="/resendEmail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p style={{ marginBottom: "20px" }}>Resend Confirmation Email</p>
        </Link>
      );
    }
  };
  render() {
    return (
      <div>
        <h1 style={{ color: "#636e72" }}>Sign Up</h1>
        <MDBAnimation type="fadeInRight">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("firstname", "Firstname")}
            {this.renderInput("lastname", "Lastname")}
            {this.renderInput("username", "Username")}
            {this.renderInput("email1", "Email", "email")}
            {this.renderInput("password1", "Password", "password")}
            {this.renderInput("confirmPassword", "ConfirmPassword", "password")}
            {this.renderInput("contactNo", "ContactNo")}
            {this.renderButton("Sign Up")}
            <br />
            {this.registerMessage()}
            {this.setResendLink()}
          </form>
        </MDBAnimation>
      </div>
    );
  }
}

export default RegisterForm;
