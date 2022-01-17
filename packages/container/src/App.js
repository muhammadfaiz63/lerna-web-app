import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppA from "@workspace/appa";
import AppB from "@workspace/appb";

function App() {
  return (
    <Router>
      <Route exact path="/" component={AppA} />
      <Route exact path="/appb" component={AppB} />
    </Router>
  );
}

export default App;
