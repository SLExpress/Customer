import React, { Component } from "react";
import MenuBar from "./../common/menuBar";
import { submitBusinessModel } from "./../../services/businessService";
import { Grid, Table, Button, Icon } from "semantic-ui-react";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
    question8: "",
    question8Answer: "",
    question8ID: "",
    question8AnswerID: "",
    question9: "",
    question9Answer: "",
    question9ID: "",
    question9AnswerID: "",
    question10: "",
    question10Answer: "",
    question10ID: "",
    question10AnswerID: "",
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
      question4AnswerID: localStorage.getItem("question4Answer"),
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
      question8: localStorage.getItem("title8"),
      question8Answer: localStorage.getItem("answer8"),
      question8ID: localStorage.getItem("question8"),
      question8AnswerID: localStorage.getItem("question8Answer"),
      question9: localStorage.getItem("title9"),
      question9Answer: localStorage.getItem("answer9"),
      question9ID: localStorage.getItem("question9"),
      question9AnswerID: localStorage.getItem("question9Answer"),
      question10: localStorage.getItem("title10"),
      question10Answer: localStorage.getItem("answer10"),
      question10ID: localStorage.getItem("question10"),
      question10AnswerID: localStorage.getItem("question10Answer"),
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
      question8ID,
      question8AnswerID,
      question9ID,
      question9AnswerID,
      question10ID,
      question10AnswerID,
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
        { question: question8ID, answer: question8AnswerID },
        { question: question9ID, answer: question9AnswerID },
        { question: question10ID, answer: question10AnswerID },
      ],
    };
    console.log("array", arr);
    await submitBusinessModel(arr);
    Swal.fire({
      icon: "success",
      title: "Answers submitted successfully",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {});
  };

  generatePdf = () => {
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
      question8,
      question8Answer,
      question9,
      question9Answer,
      question10,
      question10Answer,
    } = this.state;

    const array = [
      { id: 1, a: question1, b: question1Answer },
      { id: 2, a: question2, b: question2Answer },
      { id: 3, a: question3, b: question3Answer },
      { id: 4, a: question4, b: question4Answer },
      { id: 5, a: question5, b: question5Answer },
      { id: 6, a: question6, b: question6Answer },
      { id: 7, a: question7, b: question7Answer },
      { id: 8, a: question8, b: question8Answer },
      { id: 9, a: question9, b: question9Answer },
      { id: 10, a: question10, b: question10Answer },
    ];

    var doc = new jsPDF("p", "pt");
    doc.rect(
      20,
      20,
      doc.internal.pageSize.width - 40,
      doc.internal.pageSize.height - 40,
      "S"
    );

    doc.setTextColor(47, 167, 217);
    doc.setFontSize(32);
    doc.text(30, 55, "SLExpress");
    doc.setFontSize(12);
    doc.text(415, 40, "Email: admin@slexpress.lk");
    doc.text(440, 60, "Call Us: 077 714 5020");
    doc.line(20, 70, 575, 70);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(28);
    doc.setFontType("bold");
    doc.text(190, 140, "Answers Analysis ");

    var tempDate = new Date();
    var date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();

    var time =
      +" " +
      tempDate.getHours() +
      ":" +
      tempDate.getMinutes() +
      ":" +
      tempDate.getSeconds();

    doc.setFontSize(10);
    doc.setFontType("normal");
    doc.text(40, 190, "Email: " + localStorage.getItem("email"));
    doc.text(40, 205, "Username: " + localStorage.getItem("username"));
    doc.text(40, 220, "Date: " + date);
    doc.text(40, 235, "Time: " + time);

    doc.setFontSize(15);
    const headers = [["NO", "QUESTION", "ANSWER"]];

    const data = array.map((arr, index) => [index + 1, arr.a, arr.b]);

    let content = {
      startY: 270,
      head: headers,
      body: data,
    };

    doc.autoTable(content);

    const totalQuestions = array.length;
    const totalAnswers = array.length;

    doc.setFontSize(12);
    let finalY = doc.lastAutoTable.finalY; // The y position on the page
    doc.text(41, finalY + 50, "Total questions:" + totalQuestions);
    doc.text(41, finalY + 80, "Total Answers: " + totalAnswers);

    doc.save("SLExpres Answers Analysis.pdf");
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
      question8,
      question8Answer,
      question9,
      question9Answer,
      question10,
      question10Answer,
    } = this.state;
    const array = [
      { id: 1, a: question1, b: question1Answer },
      { id: 2, a: question2, b: question2Answer },
      { id: 3, a: question3, b: question3Answer },
      { id: 4, a: question4, b: question4Answer },
      { id: 5, a: question5, b: question5Answer },
      { id: 6, a: question6, b: question6Answer },
      { id: 7, a: question7, b: question7Answer },
      { id: 8, a: question8, b: question8Answer },
      { id: 9, a: question9, b: question9Answer },
      { id: 10, a: question10, b: question10Answer },
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
            <Button
              animated
              onClick={this.generatePdf}
              color="green"
              floated="right"
            >
              <Button.Content visible>Generate</Button.Content>
              <Button.Content hidden>
                <Icon inverted color="" name="file pdf" />
              </Button.Content>
            </Button>
            <br />
            <br />
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
