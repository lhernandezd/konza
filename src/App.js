import React, { Component } from 'react';
import http from './services/http';
import config from './config.json';
import TaskTable from './components/TaskTable';
import Pagination from './common/Pagination';

export default class App extends Component {
  state = {
    tasks: [],
    page: 1,
    pages: 1
  }

  componentDidMount() {
    this.loadTasks();  
  }

  loadTasks = async (nextPage = 1) => {
    const { data } = await http.get(`${config.baseUrl}/tasks?page=${nextPage}`);
    const { data: tasks, meta: { page, pages } } = data;
    
    this.setState({ tasks, page, pages });
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

  handleSelectPage = (nextPage) => {
    this.loadTasks(nextPage);
  }

  render() {
    const { tasks, page, pages } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Projects</h2>
          </div>
          <div className="col">
            <h2>Tasks</h2>
            <TaskTable tasks={tasks} remove={this.handleRemove} />
            <Pagination page={page} pages={pages} onSelectPage={this.handleSelectPage} />
          </div>
        </div>
      </div>
    )
  }


};
