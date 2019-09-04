import React, { Component } from 'react';
import http from './../services/http';
import config from './../config.json';
import TaskTable from './../components/TaskTable';
import Pagination from './../common/Pagination';
import ProjectList from './../components/ProjectList';

export default class Tasks extends Component {
  state = {
    tasks: [],
    page: 1,
    pages: 1,
    project: ''
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
    try {
      await http.delete(`${config.baseUrl}/tasks/${id}`);
      this.loadTasks();
    } catch (error) {
      console.error(error);
    }
  }

  handleSelectPage = (nextPage) => {
    this.loadTasks(nextPage);
  }

  handleSelectedProject = (project) => {
    this.setState({ project });
  }

  render() {
    const { tasks, page, pages, project } = this.state;

    let filteredTasks = [...tasks];

    if (project) {
      filteredTasks = filteredTasks.filter(task => task.projectId._id === project)
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Projects</h2>
            <ProjectList selected={project} onSelected={this.handleSelectedProject} />
          </div>
          <div className="col">
            <h2>Tasks</h2>
            <TaskTable tasks={filteredTasks} remove={this.handleRemove} />
            <Pagination page={page} pages={pages} onSelectPage={this.handleSelectPage} />
          </div>
        </div>
      </div>
    )
  }


};
