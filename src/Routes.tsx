import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CodeForwarder from "./components/CodeForwarder";
import LandingPage from "./pages/LandingPage";
import Start from "./pages/Start";
import StatisticsPage from "./pages/StatisticsPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/statistikk">
          <StatisticsPage />
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
