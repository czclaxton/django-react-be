import React from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import LandingPage from "./layout/LandingPage";

const App = props => {
  return (
    <div>
      <Header />
      <LandingPage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
