import React, { Component } from 'react'
import http from '../services/http';
import config from '../config.json';
import List from '../common/List';

export default class ProjectList extends Component {
  state = {
    projects: [],
  }

  async componentDidMount() {
    const { data: { data: projects } } = await http.get(`${config.baseUrl}/projects`);
    this.setState({ 
      projects: [
        { _id:'', title: 'All Projects'},
        ...projects
      ] 
    });
  }

  render() {
    const { projects } = this.state;
    const { onSelected, selected } = this.props;

    return (
      <List 
        items={projects} 
        label="title" 
        dataKey="_id" 
        selected={selected} 
        onSelected={onSelected} 
      />
    )
  }
}
