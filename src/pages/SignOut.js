import React from 'react'
import { removeToken } from "../services/auth";
import { Redirect } from "react-router-dom";

export default function SignOut({ clearUser }) {
  removeToken();
  clearUser();

  return (
    <Redirect to="/" />
  )
}

