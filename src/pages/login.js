import React, { Component } from "react";
import { Container,Row,Col } from "reactstrap";
import LoginForm from "../components/loginForm";


class Login extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col><LoginForm /></Col>
                <Col></Col>
            </Row>
        </Container>
    );
  }
}

export default Login;
