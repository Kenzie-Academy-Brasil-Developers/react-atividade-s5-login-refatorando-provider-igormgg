import { Switch, Route, useHistory } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const Routes = () => {
  const history = useHistory();

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route>{() => history.push("/")}</Route>
    </Switch>
  );
};

export default Routes;
