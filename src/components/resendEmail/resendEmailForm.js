import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import auth from "../../services/authService";
import { resendConfirmationEmail } from "../../services/registerService";

class resendEmailForm extends Form {
  state = {
    data: { email: "", userType: "customer" },
    errors: {},
    isSend: false,
    time: 90
  };

  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    type: Joi.string()
  };

  doSubmit = async () => {
    const { data } = this.state;
    try {
      await resendConfirmationEmail(data.email, data.userType);
      this.setState({ isSend: true });
      this.reduceTimer();
      // setTimeout(() => {
      //   this.setState({ isResend: true });
      // }, 60000);
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.error;
        this.setState({ errors });
      }
    }
  };

  async reduceTimer() {
    await setInterval(async () => {
      if (this.state.time !== 0) {
        this.setState(prevState => {
          return { time: prevState.time - 1 };
        });
      } else {
        // this.setState({ isResend: true });
        window.location = "/resendEmail";
      }
    }, 1000);
  }

  successMessage = () => {
    if (this.state.isSend === true) {
      return (
        <div>
          <div className="alert alert-success" style={{ width: "250px" }}>
            Email send succussfuly please check your email
          </div>
          <p className="text-muted">
            You can resend email in {this.state.time}s
          </p>
        </div>
      );
    }
  };

  // setResendLink = () => {
  //   if (this.state.isResend === true) {
  //     return (
  //       <Link
  //         style={{ textDecoration: "none" }}
  //         to="/resendEmail"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <p style={{ marginBottom: "20px" }}>Resend Confirmation Email </p>
  //       </Link>
  //     );
  //   }
  // };

  render() {
    // Redirect User To Categories Page If The user Is Already Login
    if (auth.getCurrentUser()) return <Redirect to="/categories" />;
    console.log(this.state.time);
    return (
      <div>
        <h1 style={{ color: "#636e72" }}>Resend</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderButton("Resend")}
          <br />
          {this.successMessage()}
          {/* {this.setResendLink()} */}
        </form>
      </div>
    );
  }
}

export default resendEmailForm;
