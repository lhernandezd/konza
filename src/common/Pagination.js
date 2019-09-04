import React from 'react'
import _range from 'lodash/range';

export default function Pagination(props) {
  const { page, pages, onSelectPage } = props;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
      {_range(1, pages + 1).map(index => 
        <li 
          className={index === page ? "page-item active" : "page-item" }
          onClick={() => index !== page && onSelectPage(index)}
          key={index}
        >
          <span className="page-link">
            {index}
          </span>
        </li>
      )}
      </ul>
    </nav>
  )
}
