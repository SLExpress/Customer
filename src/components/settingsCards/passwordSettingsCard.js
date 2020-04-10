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
    },
    errors: {},
    isUpdated: false,
  };

  schema = {
    password: Joi.string().required().min(8).label("Password"),
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
