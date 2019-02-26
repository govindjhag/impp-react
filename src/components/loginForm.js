import { Button, Form ,FormGroup,Label,Input} from "reactstrap";
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
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" type="password" onChange={this.handleChange} value={this.state.password} id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}

export default LoginForm;
