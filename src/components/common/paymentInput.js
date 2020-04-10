/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import { MDBInput } from "mdbreact";
import { Label } from "semantic-ui-react";

const paymentInput = ({ name, label, value, onChange, error, type }) => {
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

export default paymentInput;
