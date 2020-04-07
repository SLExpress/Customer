import React from "react";
import { MDBCol } from "mdbreact";
import { Input, Label } from "semantic-ui-react";
import styled from "styled-components";

const addDomainInput = ({ name, value, onChange, type, error }) => {
  return (
    <MDBCol md="6">
      <center>
        <Inputfield
          value={value}
          onChange={onChange}
          name={name}
          autoFocus
          id={name}
          type={type}
          placeholder="Search domain"
        />
        {error && (
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
