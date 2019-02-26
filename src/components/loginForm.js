import { Button, Form ,FormGroup,Label,Input,Alert,Spinner} from "reactstrap";
import React, { Component } from 'react';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Redirect } from "react-router-dom";

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            hasError:false,
            message:'',
            color:'',
            loading:false,
            isAuthenticated:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);

    }
    login(e){
        e.preventDefault();
        this.setState({ hasError: true, message: "" ,color:'',loading:true});
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
               this.setState({ hasError: false, message: response.data.message, color: 'success', loading: false, isAuthenticated:true});
               
           }else{
               this.setState({ hasError: true, message: response.data.message,color:'danger',loading:false});
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
        let spinnerButton = <Button type="submit">Submit </Button>;
        if(this.state.loading){ 
            spinnerButton = (
              <Spinner
                style={{ width: "3rem", height: "3rem" }}
                type="grow"
                color="primary"
              />
            );
        }
        
        return (
            <Form onSubmit={this.login}>
                <Alert color={this.state.color}>
                    {message}
                </Alert>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                {spinnerButton}
                {this.state.isAuthenticated && (<Redirect to="/" />)}
            </Form>
        );
    }
}

export default LoginForm;
