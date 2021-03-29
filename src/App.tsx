import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CodeForwarder from "./CodeForwarder";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>404</h1>
        </Route>
        <Route
          exact
          path="/:code/"
          render={(props) => {
            return <CodeForwarder code={props.match.params.code} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
