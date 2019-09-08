import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: 20}}
    >
      <NavLink to="/" className="navbar-brand">Konza</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/users" className="nav-link">Users</NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">Sign In</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
