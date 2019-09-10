import React from 'react'
import { NavLink } from 'react-router-dom';
import AuthNavBar from './AuthNavBar';

export default function NavBar({ user }) {
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
        <AuthNavBar user={user} />
      </div>
    </nav>
  )
}
