import React from "react";
import { MDBInput } from "mdbreact";
import { Label } from "semantic-ui-react";

const Input = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="form-group">
      <MDBInput
        style={{ width: "250px" }}
        value={value}
        onChange={onChange}
        name={name}
        autoFocus
        id={name}
        label={label}
        type={type}
      />
      {error && (
        <Label basic color="red" pointing prompt>
          {error}
        </Label>
      )}
    </div>
  );
};

export default Input;
