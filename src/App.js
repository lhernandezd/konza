import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from './components/NavBar';
import Tasks from './pages/Tasks';
import Projects from './pages/Projects';
import Users from './pages/Users';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/tasks" component={Tasks} />
        <Route path="/projects" component={Projects} />
        <Route path="/users" component={Users} />
        <Redirect to="/tasks" />
      </Switch>
    </Fragment>
  )
}
