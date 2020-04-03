import React from "react";
import { Icon, Input } from "semantic-ui-react";
import styled from "styled-components";

export const Down = () => {
  return <Icon name="caret down" />;
};

export const Up = () => {
  return <Icon name="caret up" />;
};

export const SearchBar = ({ value, onChange }) => {
  console.log(onChange);
  console.log("value", value);
  return (
    <Inputfield
      icon="search"
      name="search "
      placeholder="Search..."
      value={value}
      group
      type="text"
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

const Inputfield = styled(Input)`
  &&.ui.input > input {
    border-radius: 500rem !important;
  }
`;

export const Status = () => {
  // if (!liked)
  //   return (
  //     <Icon name="delete" onClick={onSubmit} style={{ color: "#e60000" }} />
  //   );
  // else
  return <Icon name="checkmark" style={{ color: "#21ba45" }} />;
};

export const UnSuccessful = () => {
  // if (!liked)
  //   return (
  //     <Icon name="delete" onClick={onSubmit} style={{ color: "#e60000" }} />
  //   );
  // else
  return <Icon name="close" style={{ color: "#e60000" }} />;
};