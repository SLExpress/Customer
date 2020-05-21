/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Form from "../common/form";
import { getCustomer, updatePassword } from "../../services/userService";
import Joi from "joi-browser";
import Swal from "sweetalert2";

class passwordSettingsCard extends Form {
  state = {
    data: {
      password: "...................",
      confirmPassword: "...................",
    },
    errors: {},
    isUpdated: false,
  };

  schema = {
    password: Joi.string().required().min(8).label("Password"),
    confirmPassword: Joi.string().required().min(8).label("ConfirmPassword"),
  };

  async populatePassword() {
    try {
      const { data: customer } = await getCustomer();
      this.setState({ data: this.mapToViewModel(customer) });
    } catch (ex) {}
  }

  async componentDidMount() {
    await this.populatePassword();
  }

  mapToViewModel(customer) {
    return {
      password: customer.password,
    };
  }

  doSubmit = async () => {
    try {
      const { data } = this.state;

      if (
        data.password === "" ||
        data.confirmPassword === "" ||
        data.confirmPassword.length < 8 ||
        data.password.length < 8
      ) {
        const errors = { ...this.state.errors };
        if (data.password.length < 8) {
          errors.password = `"Password" length must be at least 8 characters long`;
        }
        if (data.password === "" || data.password === null) {
          errors.password = `"Password" can not be empty`;
        }
        if (data.confirmPassword.length < 8) {
          errors.confirmPassword = `"ConfirmPassword" length must be at least 8 characters long`;
        }
        if (data.confirmPassword === "" || data.confirmPassword === null) {
          errors.confirmPassword = `"ConfirmPassword" can not be empty`;
        }

        this.setState({ errors });
      } else {
        if (data.password === data.confirmPassword) {
          await updatePassword(data.password);
          this.setState({ isUpdated: true });

          Swal.fire({
            icon: "success",
            title: "Successful",
            text: "Your password updated successfully",
            showConfirmButton: false,
            timer: 1500,
          }).then(function () {
            window.location = "/myAccount";
          });
        } else {
          const errors = { ...this.state.errors };
          const message = "Passwords does not match";
          errors.confirmPassword = message;
          this.setState({ errors });
        }
      }
    } catch (ex) {}
  };

  updateMessage = () => {
    if (this.state.isUpdated === true) {
      return (
        <div className="alert alert-success" style={{ width: "250px" }}>
          Password has been succussfully updated !
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header textBold">Reset Password</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {this.renderFormInput("password", "Password", "password")}
              {this.renderInput(
                "confirmPassword",
                "ConfirmPassword",
                "password"
              )}
              {this.renderButton("Reset")}
              <br />
              {/* {this.updateMessage()} */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default passwordSettingsCard;
