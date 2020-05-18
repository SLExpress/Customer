import React from "react";
import { Grid, Form } from "semantic-ui-react";
import FormsBusiness from "./../common/formsBusiness";
import { submitQuestion } from "./../../services/businessService";
import MenuBar from "./../common/menuBar";
import Joi from "joi-browser";

class questionAdding extends FormsBusiness {
  state = {
    data: {
      title: "",
      total: "4",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().max(2000).label("Suggested Question"),
    total: Joi.string(),
    answer1: Joi.string().required().max(200).label("Answer1"),
    answer2: Joi.string().required().max(200).label("Answer2"),
    answer3: Joi.string().required().max(200).label("Answer3"),
    answer4: Joi.string().required().max(200).label("Answer4"),
  };

  doSubmit = async () => {
    //call the server
    try {
      const { data } = this.state;
      console.log(data);
      const answers = [data.answer1, data.answer2, data.answer3, data.answer4];
      console.log(answers);

      await submitQuestion(data.title, data.total, answers);
      console.log("submit");
    } catch (ex) {}
  };
  render() {
    const { data, errors } = this.state;
    console.log(data);

    return (
      <Grid.Column
        mobile={13}
        tablet={13}
        computer={13}
        style={{ animation: "fadeIn 1s ease-in" }}
      >
        <Grid>
          <Grid.Column mobile={16} tablet={16} computer={16}>
            <Grid>
              <Grid.Column
                mobile={3}
                tablet={3}
                computer={3}
                style={{ marginLeft: "10px", marginBottom: "5px" }}
              >
                <MenuBar />
              </Grid.Column>
              <Grid.Column
                mobile={10}
                tablet={10}
                computer={10}
                style={{ marginTop: "10px" }}
              >
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group widths="equal">
                    <Form.TextArea
                      fluid
                      autoFocus
                      id="title"
                      onChange={this.handleChange}
                      name="title"
                      value={data.title}
                      label="Suggested Question"
                      placeholder="Tell me any thing..."
                      error={errors.title}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      id="answer1"
                      onChange={this.handleChange}
                      value={data.answer1}
                      label="Answer1"
                      name="answer1"
                      placeholder="Answer One"
                      error={errors.answer1}
                    />
                    <Form.Input
                      fluid
                      id="answer2"
                      label="Answer2"
                      name="answer2"
                      placeholder="Answer Two"
                      onChange={this.handleChange}
                      value={data.answer2}
                      error={errors.answer2}
                    />
                    <Form.Input
                      fluid
                      id="answer3"
                      label="Answer3"
                      name="answer3"
                      placeholder="Answer Three"
                      onChange={this.handleChange}
                      value={data.answer3}
                      error={errors.answer3}
                    />
                    <Form.Input
                      fluid
                      id="answer4"
                      label="Answer4"
                      name="answer4"
                      placeholder="Answer Four"
                      onChange={this.handleChange}
                      value={data.answer4}
                      error={errors.answer4}
                    />
                  </Form.Group>
                  <br />
                  <br />
                  {this.renderButton("Add Question to the Flow")}
                </Form>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    );
  }
}

export default questionAdding;
