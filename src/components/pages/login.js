import React, { Component } from "react";
import LoginForm from "../loginForm/loginForm";
import RegisterForm from "../registerForm/registerForm";
import { Container, Row, Col } from "react-bootstrap";

export default class login extends Component {
  render() {
    return (
      <Container
        style={{
          paddingTop: "5rem",
          paddingBottom: "5rem",
          paddingLeft: "3rem"
        }}
      >
        <Row>
          <Col>
            <LoginForm style={{ paddingRight: "7rem" }} />
          </Col>
          <div className="vl"></div>
          <Col style={{ paddingLeft: "7rem", paddingRight: "1rem" }}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    );
  }
}
