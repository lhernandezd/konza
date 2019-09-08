import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route
          path="/tasks"
          render={props => <Tasks {...props} user="Gustavo" />}
        />
        <Route path="/projects/:id" component={Projects} />
        <Route path="/projects" component={Projects} />
        <Route path="/users" component={Users} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Redirect to="/tasks" />
      </Switch>
    </Fragment>
  );
}
