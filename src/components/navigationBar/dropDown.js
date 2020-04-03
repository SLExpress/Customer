import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class DropDown extends Component {
  render() {
    return (
      <React.Fragment>
        <DropdownButton
          id="dropdown-basic-button"
          title="Profile"
          variant="info"
        >
          <Dropdown.Item>
            <Link to="/myAccount" style={{ textDecoration: "none" }}>
              My Account
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/myPayments" style={{ textDecoration: "none" }}>
              Payments & Billing
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/logout" style={{ textDecoration: "none" }}>
              Logout
            </Link>
          </Dropdown.Item>
        </DropdownButton>
      </React.Fragment>
    );
  }
}
