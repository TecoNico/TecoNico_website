import React from "react";
import "./App.css";
import S1route from "./Component/S1route";
import S2route from "./Component/S2route";
import S3route from "./Component/S3route";
import S4route from "./Component/S4route";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <S1route />
          </Route>
          <Route path="/2">
            <S2route />
          </Route>
          <Route path="/3">
            <S3route />
          </Route>
          <Route path="/4">
            <S4route />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
