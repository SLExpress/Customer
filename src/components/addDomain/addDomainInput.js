import React from "react";
import { MDBCol } from "mdbreact";
import { Input } from "semantic-ui-react";
import styled from "styled-components";
import { Label } from "semantic-ui-react";

const addDomainInput = ({ name, label, value, onChange, type, error }) => {
  return (
    <MDBCol md="6">
      <center>
        <Inputfield
          value={value}
          onChange={onChange}
          name={name}
          autoFocus
          id={name}
          // label={label}
          type={type}
          placeholder="Search domain"
        />
        {error && (
          // <div className="alert alert-danger" style={{ width: "250px" }}>
          //   {error}
          // </div>
          <Label basic color="red" pointing prompt>
            {error}
          </Label>
        )}
      </center>
    </MDBCol>
  );
};

export default addDomainInput;

const Inputfield = styled(Input)`
  &&.ui.input > input {
    border-radius: 500rem !important;
  }import addDomain from './../pages/addDomain';

`;
