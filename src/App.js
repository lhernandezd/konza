import React, { Component } from 'react';
import DataTable from './components/DataTable'
import http from './services/http';
import config from './config.json';

export default class App extends Component {
  state = {
    tasks: []
  }

  async componentDidMount() {
    const { data } = await http.get(`${config.baseUrl}/tasks`);
    const { data: tasks } = data;
    this.setState({ tasks });
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
