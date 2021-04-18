import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CodeForwarder from "./CodeForwarder";
import Start from "./Start";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>404</h1>
        </Route>
        <Route exact path="/8RREUV7M/" render={() => <Start />} />
        <Route
          exact
          path="/:code/"
          render={(props) => (
            <CodeForwarder paramCode={props.match.params.code} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default Routes;
