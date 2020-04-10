/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { MDBCol } from "mdbreact";
import { Input } from "semantic-ui-react";
import styled from "styled-components";

const searchBox = ({ handleChange, search, placeholder }) => {
  return (
    <MDBCol md="6">
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
    </MDBCol>
  );
};

export default searchBox;

const Inputfield = styled(Input)`
  &&.ui.input > input {
    border-radius: 500rem !important;
  }
`;
