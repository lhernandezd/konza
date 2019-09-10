import React, { Component } from "react";
import config from "./../config.json";
import http from "./../services/http";
import { setToken } from "../services/auth";

export default class Signin extends Component {
  handleClick = async (e) => {
    e.preventDefault();
    const [firstname, lastname, profilePhoto, email, password] = e.target.elements;
    const payload = { 
      firstname: firstname.value,
      lastname: lastname.value,
      profilePhoto: profilePhoto.value,
      email: email.value, 
      password: password.value
    };
    try {
      const { data: { data, meta: { token }} } = await http.post(`${config.baseUrl}/users/signup`, payload);
      setToken(token);
      this.props.setUser(data);
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
    
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleClick}>
          <div className="form-group">
            <label htmlFor="fisrtname">Firstname</label>
            <input
              type="text"
              className="form-control"
              id="fisrtname"
              placeholder="Enter firstname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="profilePhoto">Profile Photo</label>
            <input
              type="text"
              className="form-control"
              id="profilePhoto"
              placeholder="http"
            />
          </div>
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
