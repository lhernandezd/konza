import React from 'react'

export default function DataTable(props) {
  const { items, remove } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Completed</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        { items.map(item => 
          <tr key={item._id}>
            <td>{item.projectId && item.projectId.title}</td>
            <td>{item.title}</td>
            <td>{item.userId && item.userId.fullname}</td>
            <td>{item.completed ? "Completed" : "Pending"}</td>
            <td>
              <button 
                className="btn btn-danger" 
                onClick={() => remove(item._id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ) }
      </tbody>
    </table>
  )
}


