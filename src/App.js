import React, { Component } from 'react';
import http from './services/http';
import config from './config.json';
import TaskTable from './components/TaskTable';

export default class App extends Component {
  state = {
    tasks: []
  }

  async componentDidMount() {
    const { data } = await http.get(`${config.baseUrl}/tasks`);
    const { data: tasks } = data;
    this.setState({ tasks });
  }  

  handleRemove = async (id) => {
    let tasks = [...this.state.tasks];
    try {
      await http.delete(`${config.baseUrl}/tasks/${id}`);
      const updatedTasks = tasks.filter(task => task._id !== id);
      this.setState({ tasks: updatedTasks});
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { tasks } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Projects</h2>
          </div>
          <div className="col">
            <h2>Tasks</h2>
            <TaskTable tasks={tasks} remove={this.handleRemove} />
          </div>
        </div>
      </div>
    )
  }


};
