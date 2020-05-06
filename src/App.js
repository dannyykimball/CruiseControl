import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./screens/main.js";
import "./format.css";

export default function App() {
  return (
    <Router>
      <div id="App">
        <div id="CurrentScreen" className="content">
          <Switch>
            <Route path="/" exact component={Main} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
