import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Tasks from "./pages/Tasks";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";

export default class App extends Component {
  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({ user });
  }
  
  clearUser = () => {
    this.setState({ user: null });
  }

  render () {
    return (
      <Fragment>
        <NavBar user={this.state.user}/>
        <Switch>
          <Route
            path="/tasks"
            render={props => <Tasks {...props} user="Gustavo" />}
          />
          <Route path="/projects/:id" component={Projects} />
          <Route path="/projects" component={Projects} />
          <Route path="/users" component={Users} />
          <Route
            path="/signin"
            render={props => <SignIn {...props} setUser={this.setUser} />}
          />
          <Route
            path="/signup"
            render={props => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            path="/signout"
            render={props => <SignOut {...props} clearUser={this.clearUser} />}
          />
          <Redirect to="/tasks" />
        </Switch>
      </Fragment>
    );
  }
}
