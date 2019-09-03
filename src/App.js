import React, { Component } from 'react';
import DataTable from './components/DataTable'

export default class App extends Component {
  state = {
    tasks: [{
      _id: '1',
      title: 'Setup project',
      projectId: {
        title: 'Project 1'
      },
      userId: {
        name: 'Gustavo Morales'
      },
      completed: false 
    },{
      _id: '2',
      title: 'Layout',
      projectId: {
        title: 'Project 1'
      },
      userId: {
        name: 'Gustavo Morales'
      },
      completed: true
    }]
  }

  handleRemove = (id) => {
    let tasks = [...this.state.tasks];
    const updatedTasks = tasks.filter(task => task._id !== id);
    this.setState({ tasks: updatedTasks});
  }

  render() {
    const { tasks } = this.state;
    const count = tasks.length;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Projects</h2>
          </div>
          <div className="col">
            <h2>Tasks</h2>
            <p>Displaying {count} items</p>
            <DataTable items={tasks} remove={this.handleRemove} />
          </div>
        </div>
      </div>
    )
  }
};
