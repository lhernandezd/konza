import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <p>{this.props.location.search}</p>
        <p>{this.props.match.params.id}</p>
        { 
          //this.props.history.push("/") 
        }
      </div>
    )
  }
}
