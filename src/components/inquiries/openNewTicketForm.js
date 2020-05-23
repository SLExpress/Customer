/*  N. R Yamasinghe  IT18233704 version - 01 */
import React from "react";
import Forms from "../common/form";
import { submitTicket } from "../../services/inquiryService";
import { Form, Card, Grid } from "semantic-ui-react";
import Joi from "joi-browser";
import Swal from "sweetalert2";

class openNewTicketForm extends Forms {
  state = {
    data: {
      title: "",
      ticketText: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().min(4).required().label("Title"),
    ticketText: Joi.string().min(4).required().label("Text"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      if (
        data.title === "" ||
        data.title.length < 4 ||
        data.ticketText === "" ||
        data.ticketText.length < 4
      ) {
        const errors = { ...this.state.errors };

        if (data.title.length < 4) {
          errors.title = `"Title"  length must be at least 4 characters long`;
        }
        if (data.title === "" || data.title === null) {
          errors.title = `"Title" can not be empty`;
        }

        if (data.ticketText.length < 4) {
          errors.ticketText = `"TicketText"length must be at least 4 characters long`;
        }
        if (data.ticketText === "" || data.ticketText === null) {
          errors.ticketText = `"TicketText" can not be empty`;
        }

        this.setState({ errors });
      } else {
        await submitTicket(data.title, data.ticketText);
        Swal.fire({
          icon: "success",
          title: "Successful",
          text: "Ticket open successfully",
          showConfirmButton: false,
          timer: 1500,
        }).then(function () {
          window.location = "/inquiries";
        });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 422) {
        const errors = { ...this.state.errors };
        errors.ticketText = ex.response.data.error;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <Card.Content>
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Form onSubmit={this.handleSubmit}>
              {this.renderFormInput("title")}
              {this.renderTextArea("ticketText", "Ticket Text")}
              <br />
              <br />
              {this.renderButton("Submit")}
            </Form>
          </Grid.Column>
        </Grid>
      </Card.Content>
    );
  }
}

export default openNewTicketForm;
