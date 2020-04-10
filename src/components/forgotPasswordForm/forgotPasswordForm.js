/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import auth from "../../services/authService";

class forgotPasswordForm extends Form {
  state = {
    data: { email: "", password: "", type: "customer" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).required().label("Password"),
    type: Joi.string(),
  };

  doSubmit = async () => {
    console.log("Submitted");
  };

  render() {
    // Redirect User To Categories Page If The user Is Already Login
    if (auth.getCurrentUser()) return <Redirect to="/categories" />;
    return (
      <div>
        <h1 style={{ color: "#636e72" }}>Reset</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Reset")}
        </form>
      </div>
    );
  }
}

export default forgotPasswordForm;
