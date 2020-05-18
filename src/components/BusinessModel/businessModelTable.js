import React, { Component } from "react";
import { Grid, Table, Button, Icon } from "semantic-ui-react";
import MenuBar from "./../common/menuBar";
import { submitBusinessModel } from "./../../services/businessService";

class businessModelTable extends Component {
  state = {
    question1: "",
    question1Answer: "",
    question1ID: "",
    question1AnswerID: "",
    question2: "",
    question2Answer: "",
    question2ID: "",
    question2AnswerID: "",
    question3: "",
    question3Answer: "",
    question3ID: "",
    question3AnswerID: "",
    question4: "",
    question4Answer: "",
    question4ID: "",
    question4AnswerID: "",
    question5: "",
    question5Answer: "",
    question5ID: "",
    question5AnswerID: "",
    question6: "",
    question6Answer: "",
    question6ID: "",
    question6AnswerID: "",
    question7: "",
    question7Answer: "",
    question7ID: "",
    question7AnswerID: "",
  };

  componentDidMount = () => {
    this.setState({
      question1: localStorage.getItem("title1"),
      question1Answer: localStorage.getItem("answer1"),
      question1ID: localStorage.getItem("question1"),
      question1AnswerID: localStorage.getItem("question1Answer"),
      question2: localStorage.getItem("title2"),
      question2Answer: localStorage.getItem("answer2"),
      question2ID: localStorage.getItem("question2"),
      question2AnswerID: localStorage.getItem("question2Answer"),
      question3: localStorage.getItem("title3"),
      question3Answer: localStorage.getItem("answer3"),
      question3ID: localStorage.getItem("question3"),
      question3AnswerID: localStorage.getItem("question3Answer"),
      question4: localStorage.getItem("title4"),
      question4Answer: localStorage.getItem("answer4"),
      question4ID: localStorage.getItem("question4"),
      question4AnswerID: localStorage.getItem(" question4Answer"),
      question5: localStorage.getItem("title5"),
      question5Answer: localStorage.getItem("answer5"),
      question5ID: localStorage.getItem("question5"),
      question5AnswerID: localStorage.getItem("question5Answer"),
      question6: localStorage.getItem("title6"),
      question6Answer: localStorage.getItem("answer6"),
      question6ID: localStorage.getItem("question6"),
      question6AnswerID: localStorage.getItem("question6Answer"),
      question7: localStorage.getItem("title7"),
      question7Answer: localStorage.getItem("answer7"),
      question7ID: localStorage.getItem("question7"),
      question7AnswerID: localStorage.getItem("question7Answer"),
    });
  };

  handleSumbit = async () => {
    const {
      question1ID,
      question1AnswerID,
      question2ID,
      question2AnswerID,
      question3ID,
      question3AnswerID,
      question4ID,
      question4AnswerID,
      question5ID,
      question5AnswerID,
      question6ID,
      question6AnswerID,
      question7ID,
      question7AnswerID,
    } = this.state;

    const arr = {
      questions: [
        { question: question1ID, answer: question1AnswerID },
        { question: question2ID, answer: question2AnswerID },
        { question: question3ID, answer: question3AnswerID },
        { question: question4ID, answer: question4AnswerID },
        { question: question5ID, answer: question5AnswerID },
        { question: question6ID, answer: question6AnswerID },
        { question: question7ID, answer: question7AnswerID },
      ],
    };

    await submitBusinessModel(arr);
    console.log("submittted");
  };

  render() {
    const {
      question1,
      question1Answer,
      question2,
      question2Answer,
      question3,
      question3Answer,
      question4,
      question4Answer,
      question5,
      question5Answer,
      question6,
      question6Answer,
      question7,
      question7Answer,
    } = this.state;
    const array = [
      { id: 1, a: question1, b: question1Answer },
      { id: 2, a: question2, b: question2Answer },
      { id: 3, a: question3, b: question3Answer },
      { id: 4, a: question4, b: question4Answer },
      { id: 5, a: question5, b: question5Answer },
      { id: 6, a: question6, b: question6Answer },
      { id: 7, a: question7, b: question7Answer },
    ];
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={3}
            phone={3}
            tablet={3}
            computer={3}
            style={{ marginLeft: "30px" }}
          >
            <MenuBar />
          </Grid.Column>

          <Grid.Column
            width={11}
            phone={11}
            tablet={11}
            computer={11}
            style={{ marginTop: "20px" }}
          >
            <Table definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Question</Table.HeaderCell>
                  <Table.HeaderCell>Answer</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {array.map((item) => {
                  return (
                    <Table.Row key={item.id}>
                      <Table.Cell>Question {item.id}</Table.Cell>
                      <Table.Cell>{item.a}</Table.Cell>
                      <Table.Cell>{item.b}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>

            <Button
              floated="right"
              icon
              labelPosition="left"
              color="green"
              size="small"
              onClick={this.handleSumbit}
            >
              <Icon name="check" /> Submit Answers
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={2} phone={2} tablet={2} computer={2}></Grid.Column>
      </Grid>
    );
  }
}

export default businessModelTable;
