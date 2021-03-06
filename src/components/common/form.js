/*  N. R Yamasinghe  IT18233704 version - 01 */
import React, { Component } from "react";
import { Input, Area } from "./input";
import { Buttons } from "../table/buttons";
import AddDomainInput from "./../addDomain/addDomainInput";
import FormInput from "./formInput";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // const errors = this.validate();
    // this.setState({ errors: errors || {} });
    // if (errors) return;
    // this.doSubmit();
    this.validate();
    this.doSubmit();
    // const errors = this.validate();
    // this.setState({ errors: errors || {} });
    // if (errors) return;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return <Buttons name={label} color="#40a3dc" disabled={this.validate()} />;
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderAddDomainInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <AddDomainInput
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderFormInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <FormInput
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextArea(name, type = "text") {
    const { data, errors } = this.state;

    return (
      <Area
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        group
        type={type}
        errors={errors[name]}
      />
    );
  }
}

export default Form;
