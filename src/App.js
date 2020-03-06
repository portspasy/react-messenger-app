import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import HomePage from "./pages/homepage/homepage.component";
import SignInSignUpPage from "./pages/sign-in/sign-in-and-sign-up.component";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
