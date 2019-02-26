import { Button, Form } from "react-bootstrap";
import React, { Component } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            hasError:false,
            message:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

    }
    login(e){
        e.preventDefault();
        this.setState({ hasError: true, message: "" });
        const axiosInstance = axios.create({
          headers: { "Content-Type": "application/json" }
        });

        axios({
          method: "post",
          url:
            "https://itestapi.imerit.net:32845/impp/imerit/auth/signin/0",
          headers: { "Content-Type": "application/json" },
          data: {
            userCode: this.state.email,
            password: this.state.password,
            agentMeta: {}
          }
        }).then((response)=> {
           if(response.data.appcode === 50003 && response.data.token){
               reactLocalStorage.set("token", response.data.token);
               this.setState({ hasError: false, message: response.data.message })
           }else{
               this.setState({ hasError: true, message: response.data.message});
               reactLocalStorage.remove("token");
           }
        });
    }
    handleChange(event){
        event.persist();
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    render(){
        let message = (<p>{this.state.message}</p>);
        return (
            <Form onSubmit={this.login}>
            {message}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" />              
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        );
    }
}

export default LoginForm;
