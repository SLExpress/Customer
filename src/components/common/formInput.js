import React from "react";
import { MDBInput } from "mdbreact";
import { Label } from "semantic-ui-react";

const FormInput = ({ name, label, value, onChange, error, type }) => {
  return (
    <div className="form-group">
      <MDBInput
        style={{ width: "945px" }}
        value={value}
        onChange={onChange}
        name={name}
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

export default FormInput;
