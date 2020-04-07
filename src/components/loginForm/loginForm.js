import React from "react";
import Form from "../common/form";
import auth from "../../services/authService";
import { Redirect, Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
import Swal from "sweetalert2";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "", type: "customer" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string()
      .min(8)
      .required()
      .label("Password"),
    type: Joi.string()
  };

  doSubmit = async () => {
    Swal.queue([
      {
        title: "Logging in",
        onBeforeOpen: () => {
          Swal.showLoading();
        }
      }
    ]);
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password, data.type);
      Swal.fire({
        icon: "success",
        title: "Login Successfull",
        showConfirmButton: false,
        timer: 1500
      }).then(function() {
        window.location = "/landingPage";
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        Swal.close();
        const errors = { ...this.state.errors };
        errors.password = ex.response.data.error;
        this.setState({ errors });
      } else if (ex.response && ex.response.status === 403) {
        Swal.fire({
          icon: "info",
          title: "Please confirm your email address",
          showConfirmButton: true
        });
      }
    }
  };

  render() {
    // Redirect User To Categories Page If The user Is Already Login
    if (auth.getCurrentUser()) return <Redirect to="/landingPage" />;
    return (
      <div>
        <h1 style={{ color: "#636e72" }}>Sign In</h1>
        <MDBAnimation type="fadeInLeft">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email", "email")}
            {this.renderInput("password", "Password", "password")}
            <Link style={{ textDecoration: "none" }} to="/forgotPassword">
              <p style={{ marginBottom: "20px" }}>Forgot Password ?</p>
            </Link>
            {this.renderButton("Sign In")}
          </form>
        </MDBAnimation>
      </div>
    );
  }
}

export default LoginForm;
