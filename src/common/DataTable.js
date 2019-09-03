import React from 'react';
import _get from 'lodash/get';

export default function DataTable(props) {
  const { columns, items, dataKey } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => 
            <th scope="col" key={`column-${index}`}>
              {column.label}
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {items.map(item => 
          <tr key={item[dataKey]}>
            {columns.map((column,index) => 
              <td key={`${item[dataKey]}-column-${index}`}>
                { column.path 
                  ? _get(item,column.path)
                  : column.content(item)
                }
              </td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  )
}


