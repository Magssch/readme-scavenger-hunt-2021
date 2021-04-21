import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CodeForwarder from "./components/CodeForwarder";
import LandingPage from "./pages/LandingPage";
import StartPage from "./pages/StartPage";
import RulesPage from "./pages/RulesPage";
import StatisticsPage from "./pages/StatisticsPage";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/8RREUV7M">
          <RulesPage />
        </Route>
        <Route exact path="/statistikk">
          <StatisticsPage />
        </Route>
        <Route exact path="/start/8RREUV7M" render={() => <StartPage />} />
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
