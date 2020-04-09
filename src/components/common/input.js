import React from "react";
import { MDBInput } from "mdbreact";
import { Label, TextArea } from "semantic-ui-react";

export const Input = ({ name, label, value, onChange, error, type }) => {
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

export const Area = ({ name, errors, ...rest }) => {
  return (
    <>
      <TextArea
        rows={10}
        placeholder="Type a Message..."
        {...rest}
        name={name}
        style={{ minHeight: 100 }}
      />
      {errors && (
        <Label basic color="red" pointing prompt>
          {errors}
        </Label>
      )}
    </>
  );
};
