import React, { Component } from 'react'
import http from '../services/http';
import config from '../config.json';
import List from '../common/List';

export default class ProjectList extends Component {
  state = {
    projects: [],
    selected: ''
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selected !== state.selected) {
      return {
        selected: props.selected,
      };
    }

    // Return null if the state hasn't changed
    return null;
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

  handleSelected = (selected) => {
    this.props.onSelected(selected);
  }
  
  render() {
    const { projects, selected } = this.state;
    return (
      <List 
        items={projects} 
        label="title" 
        dataKey="_id" 
        selected={selected} 
        onSelected={this.handleSelected} 
      />
    )
  }
}
