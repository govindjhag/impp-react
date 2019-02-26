import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Row,Container,Col} from "react-bootstrap";

import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
/*import logo from './logo.svg';*/
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Card>
            <Card.Header>IMPP</Card.Header>
            <Card.Body>
              <Container>
                <Row>
                  <Col />
                  <Col>
                    <LoginForm />
                  </Col>
                  <Col />
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </header>
      </div>
    );
  }
}

export default App;
