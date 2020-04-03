import React from "react";
import { MDBCol } from "mdbreact";
import { Input } from "semantic-ui-react";
import styled from "styled-components";

const searchBox = ({ handleChange, search, placeholder }) => {
  return (
    <MDBCol md="6">
      {/* <form className="form-inline"> */}
      {/* <MDBIcon icon="search" style={{ color: "var(--lightGrey)" }} /> */}
      {/* <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="search"
          id="search"
          onChange={handleChange}
          value={search}
        /> */}
      <center>
        <Inputfield
          icon="search"
          type="text"
          placeholder={placeholder}
          aria-label="Search"
          name="search"
          id="search"
          onChange={handleChange}
          value={search}
        />
      </center>
      {/* </form> */}
    </MDBCol>
  );
};

export default searchBox;

const Inputfield = styled(Input)`
  &&.ui.input > input {
    border-radius: 500rem !important;
  }
`;
