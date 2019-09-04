import React from 'react'

export default function List(props) {
  const { items, label, dataKey, selected, onSelected } = props;
  return (
    <ul className="list-group">
      {items.map(item => 
        <li 
          className={(
            item[dataKey] === selected
            ? "list-group-item active"
            : "list-group-item"
          )}
          onClick={ () => onSelected(item[dataKey]) }
          key={item[dataKey]}
        >
          {item[label]}
        </li>
      )}
    </ul>
  )
}
