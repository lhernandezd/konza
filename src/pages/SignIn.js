import React, { Component } from "react";
import config from "./../config.json";
import http from "../services/http";

export default class Signin extends Component {
  handleClick = async (e) => {
    e.preventDefault();
    const [email, password] = e.target.elements;
    await http.post(`${config.baseUrl}/users/signin`, { 
      email: email.value, 
      password: password.value
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleClick}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
