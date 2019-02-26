import React, { Component } from "react";
import { Container,Row,Col } from "reactstrap";
import LoginForm from "../components/loginForm";


class Home extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col><h3>Welcome To Dashboard</h3></Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default Home;