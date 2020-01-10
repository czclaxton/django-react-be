import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import LandingPage from "./layout/LandingPage";
import FormikRegistrationForm from "./forms/Registration";
import FormikLoginForm from "./forms/Login";

import { Provider } from "react-redux";
import store from "../store";


const App = props => {
  return (
    <Router>
    <Provider store={store}>

        <Route path="/" component={Header} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={FormikRegistrationForm} />
          <Route path="/login" component={FormikLoginForm} />
        </Switch>

    </Provider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
