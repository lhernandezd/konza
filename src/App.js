import React, { Fragment } from 'react';
import Tasks from './pages/Tasks';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Tasks />
    </Fragment>
  )
}
