import React, { Fragment } from 'react'
import { NavLink } from "react-router-dom";

export default function AuthNavBar({ user }) {
  return (
    <Fragment>
      { user
        ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                {user.fullname }
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signout" className="nav-link">Sign Out</NavLink>
            </li>
          </ul>
        )
        : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/signin" className="nav-link">Sign In</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
            </li>
          </ul>
        )
      }
    </Fragment>
  )
}
