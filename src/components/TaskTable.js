import React, { Component, Fragment } from 'react'
import DataTable from '../common/DataTable';

export default class TaskTable extends Component {
  columns = [{
    label: "Project",
    path: "projectId.title"
  },{
    label: "Title",
    path: "title"
  },{
    label: "Author",
    path: "userId.fullname"
  },{
    label: "Completed",
    content: (row) => {
      return row.completed ? "Completed" : "Pending"
    }
  },{
    label: "Actions",
    content: (row) => {
      return (
        <button 
          onClick={() => this.props.remove(row._id)}
          className="btn btn-danger"
        >
          Remove
        </button>
      );
    }
  }];

  dataKey = "_id"

  render() {
    const { columns, dataKey, props: { tasks } } = this;
    const count = tasks.length;
    return (
      <Fragment>
        <p>Displaying {count} items</p>
        <DataTable 
          columns={columns}
          items={tasks}
          dataKey={dataKey}
        />
      </Fragment>
    )
  }
}
