import React, { Component } from "react";
import { getBusinessQuestions } from "./../../services/businessService";
import { Grid } from "semantic-ui-react";
import { MDBAnimation } from "mdbreact";

class questiionFormOne extends Component {
  state = {
    title: "",
    question: "",
    selectedOption: "",

    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer1ID: "",
    answer2ID: "",
    answer3ID: "",
    answer4ID: "",
  };

  componentDidMount = async () => {
    const { data } = await getBusinessQuestions();
    console.log(data);
    this.setState({
      title: data[0].title,
      question: data[0]._id,
      answer1: data[0].answers[0].answer,
      answer2: data[0].answers[1].answer,
      answer3: data[0].answers[2].answer,
      answer4: data[0].answers[3].answer,
      answer1ID: data[0].answers[0]._id,
      answer2ID: data[0].answers[1]._id,
      answer3ID: data[0].answers[2]._id,
      answer4ID: data[0].answers[3]._id,
    });
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { question, selectedOption, title } = this.state;
    const { data } = await getBusinessQuestions();

    const answer = data.find((item) =>
      item.answers.find((a) => a._id === selectedOption)
    );
    const subAnswers = answer.answers.find(
      (item) => item._id === selectedOption
    );
    localStorage.setItem("title1", title);
    localStorage.setItem("answer1", subAnswers.answer);

    localStorage.setItem("question1", question);
    localStorage.setItem("question1Answer", selectedOption);

    window.location = "/questionTwo";
  };

  render() {
    const {
      title,
      answer1,
      answer2,
      answer3,
      answer4,
      answer1ID,
      answer2ID,
      answer3ID,
      answer4ID,
    } = this.state;
    console.log(this.state.selectedOption);
    return (
      <Grid centered style={{ height: "530px", marginTop: "20px" }}>
        <center>
          <MDBAnimation type="fadeInRight">
            <form onSubmit={this.handleFormSubmit}>
              <div row className="form-check">
                <h1>{title} </h1>
                <br />
                <label>
                  <input
                    type="radio"
                    name="answer1"
                    value={answer1ID}
                    checked={this.state.selectedOption === answer1ID}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answer1}
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="answer2"
                    value={answer2ID}
                    checked={this.state.selectedOption === answer2ID}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answer2}
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="answer3"
                    value={answer3ID}
                    checked={this.state.selectedOption === answer3ID}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answer3}
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="answer4"
                    value={answer4ID}
                    checked={this.state.selectedOption === answer4ID}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  {answer4}
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-5 m-4" type="submit">
                  Continue
                </button>
              </div>
            </form>
          </MDBAnimation>
        </center>
      </Grid>
    );
  }
}

export default questiionFormOne;
