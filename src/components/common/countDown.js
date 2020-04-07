import React, { Component } from "react";

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: ""
    };
    this.x = null;
    this.deadline = null;
  }
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    this.setState({ days, minutes, hours, seconds });
    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP"
      });
    }
  }
  componentDidMount() {
    this.deadline = new Date(this.props.deadline).getTime();

    this.x = setInterval(this.count, 1000);
  }

  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div>
        <div id="clockdiv">
          <div>
            <span className="days" id="day">
              {days}
              <div className="smalltext">Days</div>
            </span>
          </div>
          <div>
            <span className="hours" id="hour">
              {hours}
              <div className="smalltext">Hours</div>
            </span>
          </div>
          <div>
            <span className="minutes" id="minute">
              {minutes}
              <div className="smalltext">Mins</div>
            </span>
          </div>
          <div>
            <span className="seconds" id="second">
              {seconds}
              <div className="smalltext">Sec</div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
