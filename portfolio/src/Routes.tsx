import { Route, Link, BrowserRouter as Router, BrowserRouter, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home"></Route>
      </Switch>
    </Router>
  );
};
