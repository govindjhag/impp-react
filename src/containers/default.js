import React, { Component } from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";

class Default extends Component{

    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Default;