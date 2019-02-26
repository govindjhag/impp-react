import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter,Route,Switch }  from "react-router-dom";
import Default from "./containers/default";
/*import logo from './logo.svg';*/
import './App.css';
import Login from "./pages/login";



class App extends Component {
  render() {
    return (
      <HashRouter >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Default} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
