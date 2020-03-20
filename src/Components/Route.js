import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/HomeContainer";

export default () => (
  <Router>
    <Route exact path="/cat" component={Home} />
  </Router>
);
