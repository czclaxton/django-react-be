import React from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import LandingPage from "./layout/LandingPage";

import { Provider } from "react-redux";
import store from "../store";

const App = props => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <LandingPage />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
